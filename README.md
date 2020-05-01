<p align="center">
  <img width="400" src="https://user-images.githubusercontent.com/17516174/80777987-3d074380-8b67-11ea-99c8-a37121e95010.png">
  <h1 align="center">COVID-Box</h1>
  <p align="center">🦠 Update a gist to contain global or per country coronavirus stats</p>
  <p align="center"><strong>covid-box</strong> is a GitHub Action that is designed to work using the <a href="https://developer.github.com/actions/managing-workflows/creating-and-cancelling-a-workflow/#scheduling-a-workflow"><code>schedule</code></a> event.</p>
</p>

<p align="center"><a href="https://github.com/puf17640/covid-box"><img alt="GitHub Actions status" src="https://github.com/puf17640/covid-box/workflows/Node%20CI/badge.svg"></a></p>
<br>

## Setup

1. Fork this repository
2. Create a new public GitHub Gist (https://gist.github.com/) and add the ID as secret 'GIST_ID'
`https://gist.github.com/puf17640/`***f091f6edaca9b14d5a149983526feb63***
3. [Create a Personal Access Token](https://github.com/settings/tokens/new) with the `gist` scope and add it as secret 'GH_PAT'.
4. (Optional) If you want to show a specific countrys data, add secret COUNTRY with the name of the country, available names can be found on https://worldometers.info/coronavirus
5. Wait for it to update! 🎉

### Example Secrets
```
GIST_ID=f091f6edaca9b14d5a149983526feb63
GH_PAT=e276fb5f5dcf867246406ce66d9d409*********
COUNTRY=Austria
```

### How to add Secrets

After forking the repository, you can access the Secrets Tab in the Settings.

## Credits

This project uses the [covidapi](https://npmjs.com/covidapi) npm package to get all the data from [NovelCOVID API](https://disease.sh)

---

_Inspired by [JasonEtco/activity-box](https://github.com/JasonEtco/activity-box)_
