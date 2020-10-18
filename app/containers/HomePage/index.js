/* eslint-disable react/no-unused-state */
import React from 'react';

import CanvasJSReact from '../../assets/canvasjs/canvasjs.react';

import { BASE_API } from '../../utils/ApiUtil';
const { CanvasJSChart } = CanvasJSReact;

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      resultDeath: [],
      topFiveDeath: [],
      topFifteenDeath: [],
      topFiveDeathCounty: [],
      topTenDeathCounty: [],
      topCountryDetails: [],
    };
  }

  componentDidMount() {
    this.getDataDailyCovid19();
    this.getTopDeathCounty();
    this.getTopCountyDetails();
  }

  // Data Daily & By Date
  async getDataDailyCovid19() {
    const self = this;

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    await fetch(`${BASE_API}/daily`, requestOptions, {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(
        result => {
          const topFiveDeaths = result.slice(Math.max(result.length - 5, 1));
          const topFifteenDeaths = result.slice(
            Math.max(result.length - 15, 9),
          );

          const results = result.pop();

          self.setState({
            isLoaded: true,
            items: results,
            resultDeath: results.deaths,
            topFiveDeath: topFiveDeaths,
            topFifteenDeath: topFifteenDeaths,
          });
        },
        error => {
          self.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  // TOP 5 Death Country
  async getTopDeathCounty() {
    const self = this;

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    await fetch(`${BASE_API}/confirmed`, requestOptions, {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(
        result => {
          const sort = result.sort(
            (a, b) => parseFloat(a.deaths) - parseFloat(b.deaths),
          );
          const topFiveDeathCountrys = sort.slice(Math.max(sort.length - 5, 1));
          const topTenDeathCountys = sort.slice(Math.max(sort.length - 10, 1));

          self.setState({
            isLoaded: true,
            topFiveDeathCounty: topFiveDeathCountrys,
            topTenDeathCounty: topTenDeathCountys,
          });
        },
        error => {
          self.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  // Get 10 Country Details
  async getTopCountyDetails() {
    const self = this;

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    await fetch(`${BASE_API}/countries`, requestOptions, {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(
        result => {
          const resultCountryDetail = result.countries;

          const resultCountryDetails = resultCountryDetail.slice(
            Math.max(resultCountryDetail.length - 10, 1),
          );
          self.setState({
            isLoaded: true,
            topCountryDetails: resultCountryDetails,
          });
        },
        error => {
          self.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const {
      items,
      topFiveDeath,
      topFifteenDeath,
      resultDeath,
      topFiveDeathCounty,
      topTenDeathCounty,
      topCountryDetails,
    } = this.state;

    const { reportDate } = items;

    const deathTotal = resultDeath.total;
    const inSideregion = resultDeath.china;
    const outSideChina = resultDeath.outsideChina;

    // SORTING Data
    const sort = topFiveDeathCounty.sort(
      (a, b) => parseFloat(b.deaths) - parseFloat(a.deaths),
    );

    const sortDescCountry = topTenDeathCounty.sort(
      (a, b) => parseFloat(b.deaths) - parseFloat(a.deaths),
    );

    const resultTopFiveDeathCounty = sort.map(resultTopFiveDeathCountys => (
      <tr>
        <td style={{ paddingLeft: 20, width: 260 }}>
          {resultTopFiveDeathCountys.countryRegion}
        </td>
        <td style={{ width: 200 }}>{resultTopFiveDeathCountys.deaths}</td>
      </tr>
    ));

    const resultTopTenDeathCounty = sortDescCountry.map(sortDescCountrys => (
      <tr>
        <td style={{ paddingLeft: 20, width: 560 }}>
          <span style={{ color: '#32a83a' }}>
            {sortDescCountrys.countryRegion}{' '}
          </span>
        </td>
        <td style={{ width: 200 }}>{sortDescCountrys.deaths}</td>
      </tr>
    ));

    const resultTopCountryDetails = topCountryDetails.map(topCountryDetail => (
      <tr>
        <td style={{ paddingLeft: 20, width: 560 }}>
          <span style={{ color: '#32a83a' }}>{topCountryDetail.name} </span>
        </td>
        <td style={{ width: 100 }}>{topCountryDetail.iso2}</td>
        <td style={{ width: 100 }}>{topCountryDetail.iso3}</td>
      </tr>
    ));

    // Bar Chart
    const dataPoints = topFiveDeath.map(topFiveDeaths => ({
      label: topFiveDeaths.reportDate,
      y: topFiveDeaths.deaths.total,
    }));

    const options = {
      animationEnabled: true,
      animationDuration: 5000,
      width: 390,
      data: [
        {
          type: 'column',
          dataPoints,
        },
      ],
    };

    const optionsBarBottom = {
      animationEnabled: true,
      animationDuration: 5000,
      width: 999,
      data: [
        {
          type: 'column',
          dataPoints,
        },
      ],
    };

    // line Chart
    // eslint-disable-next-line no-unused-vars
    const dataPoints1 = topFifteenDeath.map(topFifteenDeaths => ({
      // eslint-disable-next-line radix
      x: new Date(topFifteenDeaths.reportDate),
      y: topFifteenDeaths.deaths.total,
    }));

    const optionsLineChart = {
      theme: 'light',
      animationDuration: 1000,
      height: 720,
      width: 590,
      axisY: {
        includeZero: false,
      },
      data: [
        {
          type: 'line',
          dataPoints,
        },
      ],
    };

    return (
      <div id="wrapper">
        {/* START CONTENT */}
        <div className="content-page">
          <div className="content">
            <div className="container">
              {/* page tittle */}
              <div className="row">
                <div className="col-sm-12">
                  <div className="page-title-box">
                    <h4 className="page-title">Codemi Home</h4>
                  </div>
                </div>
              </div>
              {/* end page tittle */}
              {/* start cards */}
              {/* Card ROW 1 */}
              <div className="row">
                <div className="col-sm-7">
                  <div className="card-box">
                    <h4 className="m-t-0 m-b-30 header-title">
                      <b>Line Chart</b>
                    </h4>
                    <h4 className="m-t-0 m-b-30 header-title">
                      <b>Death Total</b>
                    </h4>
                    <div className="row">
                      <div className="col-sm-10">
                        <CanvasJSChart options={optionsLineChart} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="card-box">
                    <h4 className="m-t-0 m-b-10 ">
                      <b>Data Covid19 </b>
                    </h4>
                    <h2>
                      <b>
                        <p style={{ color: 'Blue' }}>{reportDate}</p>
                      </b>
                    </h2>
                    <h5>
                      <b>Death Total : </b>
                      <b style={{ color: 'Red' }}>{deathTotal}</b> &nbsp;{' '}
                      <b>China : </b>
                      <b style={{ color: 'Red' }}>{inSideregion}</b>
                    </h5>
                    <h5>
                      <b>Out Side China : </b>
                      <b style={{ color: 'Red' }}>{outSideChina}</b>
                    </h5>
                    <div className="row">
                      <div className="col-md-12">
                        <br />
                        <h4 className="m-t-0 m-b-16 ">
                          <b>Total deaths last 5 days </b>
                        </h4>
                        <hr />
                        <CanvasJSChart options={options} />
                      </div>
                    </div>
                    <div className="row">
                      <br />
                      <h4 className="m-t-0 m-b-10 ">
                        <b>Top 5 Country Deaths</b>
                      </h4>
                      <hr />
                      <table>
                        <thead>
                          <th style={{ paddingLeft: 20 }}> Country Region</th>
                          <th> Deaths</th>
                          {resultTopFiveDeathCounty}
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card ROW 2 */}
              <div className="row">
                <div className="col-sm-6">
                  <div className="card-box">
                    <div className="row">
                      <br />
                      <h4 className="m-t-0 m-b-10 ">
                        <b>Top 10 Country Deaths </b>
                      </h4>
                      <hr />
                      <table>
                        <thead>
                          <th style={{ paddingLeft: 20 }}> Country Region</th>
                          <th> Deaths</th>
                          {resultTopTenDeathCounty}
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-box">
                    <div className="row">
                      <br />
                      <h4 className="m-t-0 m-b-10 ">
                        <b> Top 10 Country Details</b>
                      </h4>
                      <hr />
                      <table>
                        <thead>
                          <th style={{ paddingLeft: 20 }}> Country Region</th>
                          <th> ISO2</th>
                          <th> ISO3</th>
                          {resultTopCountryDetails}
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card ROW 3 */}
              <div className="row">
                <div className="col-sm-12">
                  <div className="card-box">
                    <h4 className="m-t-0 m-b-30 header-title">
                      <b>Total deaths last 5 days</b>
                    </h4>
                    <div className="row">
                      <div className="col-sm-10">
                        <CanvasJSChart options={optionsBarBottom} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end cards */}
            </div>
          </div>
        </div>
        {/* END CONTENT */}
      </div>
    );
  }
}
