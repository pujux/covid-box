<p align="center">
  <img width="400" src="https://user-images.githubusercontent.com/17516174/80812104-92733d00-8bc7-11ea-8017-1ed35aa64d4b.png">
  <h1 align="center">COVID-Box</h1>
  <p align="center">🦠 Update a gist to contain global or per country coronavirus stats</p>
  <p align="center"><strong>covid-box</strong> is a GitHub Action that is designed to work using the <a href="https://developer.github.com/actions/managing-workflows/creating-and-cancelling-a-workflow/#scheduling-a-workflow"><code>schedule</code></a> event.</p>
</p>

<p align="center"><a href="https://github.com/puf17640/covid-box"><img alt="GitHub Actions status" src="https://github.com/puf17640/covid-box/workflows/Node%20CI/badge.svg"></a></p>
<br>

## Setup


### Prep work

1. Create a new public GitHub Gist (https://gist.github.com/)
2. Create a personal access token with the `gist` scope and copy it. (https://github.com/settings/tokens/new)

### Project setup

1. Fork this repository
2. Go to the repo **Settings > Secrets**
3. Add the following environment variables:
   - **GH_PAT:** The personal access token generated above.
   - **GIST_ID:** The ID portion from your gist url: `https://gist.github.com/puf17640/`**`f091f6edaca9b14d5a149983526feb63`**.
   - **COUNTRY:** Specify a country name to show country specific data, if omitted, Global data is shown.
4. Wait for it to update! 🎉

## Credits

This project uses the [covidapi](https://npmjs.com/covidapi) npm package to get all the data from [NovelCOVID API](https://disease.sh)

---

_Inspired by [JasonEtco/activity-box](https://github.com/JasonEtco/activity-box)_
