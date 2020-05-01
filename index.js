require('dotenv').config()
const api = require('covidapi'),
	table = require('text-table'),
	moment = require('moment'),
	emoji = require('node-emoji'),
	{ Toolkit } = require('actions-toolkit'),
	{ GistBox } = require('gist-box')

Toolkit.run(async tools => {
	const { GIST_ID, GH_PAT, COUNTRY } = process.env

	// Get the user's public events
	tools.log.debug(`Getting COVID stats for ${COUNTRY || 'Global'}`)
	const data = COUNTRY ? await api.countries({ country: COUNTRY }) : await api.all()
	tools.log.debug(`Successfully fetched ${data.country || 'Global'} data from the API.`)

	const content = table([
		[data.country ? `${emoji.get(`flag-${data.countryInfo.iso2.toLowerCase()}`)}${data.country}` : '🌍 Global', moment(data.updated).fromNow()],
		['🤒Active:', String(data.active).replace(/(.)(?=(\d{3})+$)/g, '$1,')],
		['😌Recovered:', String(data.recovered).replace(/(.)(?=(\d{3})+$)/g, '$1,')],
		['💀Deaths:', String(data.deaths).replace(/(.)(?=(\d{3})+$)/g, '$1,')],
		['💉Tests:', String(data.tests).replace(/(.)(?=(\d{3})+$)/g, '$1,')]
	], { align: ['l', 'r'], stringLength: (str) => str.includes('ago') ? str.length - 2 : str.length })

	const box = new GistBox({ id: GIST_ID, token: GH_PAT })
	try {
		tools.log.debug(`Updating Gist ${GIST_ID}`)
		await box.update({ content })
		tools.exit.success(`Successfully updated Gist ${GIST_ID}!`)
	} catch (err) {
		tools.log.debug(`Error retrieving or updating the Gist ${GIST_ID}`)
		tools.exit.failure(err)
	}
},
{
	event: 'schedule',
	secrets: ['GITHUB_TOKEN', 'GH_PAT', 'COUNTRY', 'GIST_ID']
})
