import React, { useEffect, useState } from 'react'
import {
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CWidgetStatsA,
  } from '@coreui/react'
  import { CChartLine,CChartBar } from '@coreui/react-chartjs'
  import { getStyle, hexToRgba } from '@coreui/utils'
  import CIcon from '@coreui/icons-react'
  import {
    cibCcAmex,
    cibCcApplePay,
    cibCcMastercard,
    cibCcPaypal,
    cibCcStripe,
    cibCcVisa,
    cibGoogle,
    cibFacebook,
    cibLinkedin,
    cifBr,
    cifEs,
    cifFr,
    cifIn,
    cifPl,
    cifUs,
    cibTwitter,
    cilCloudDownload,
    cilPeople,
    cilUser,
    cilUserFemale,
  } from '@coreui/icons'
import axios from 'axios'
  
export default function Home() {
const [data, setData] = useState()
    useEffect(() => {
      axios.get('https://ecocharge-backend-3ms8.onrender.com/api/users/auth/dashboard').then(res=>setData(res.data))
    }, [])
    
  return (
    data && (
      <>
        <CRow>
          <h3 className="mt-4">Total:</h3>
          <CCol sm={6} lg={4}>
            <CWidgetStatsA
              className="mb-4"
              color=" red"
              style={{
                width: "100%",
                minHeight: "163px",

                background:
                "linear-gradient(167deg, rgb(166, 113, 69) 49%, rgb(195 175 175) 98%)" 
                // " linear-gradient(167deg, rgba(150, 25, 22, 1) 49%, rgba(244, 115, 110, 1) 98%)",
              }}
              value={data.usersCount}
              title="Users"
            />
          </CCol>
          <CCol sm={6} lg={4}>
            <CWidgetStatsA
              className="mb-4"
              color="green"
              style={{
                minHeight: "163px",
                width: "100%",
                background:
                "linear-gradient(167deg, rgb(134 163 54) 41%, rgb(172 191 172) 98%)" 
                // " linear-gradient(167deg, rgba(6, 100, 35, 1) 41%, rgba(25, 207, 26, 1) 98%)",
              }}
              value={data.stationCount}
              title="Stations"
            />
          </CCol>
          <CCol sm={6} lg={4}>
            <CWidgetStatsA
              className="mb-4"
              color="blue violet"
              style={{
                minHeight: "163px",
                width: "100%",
                background:
                "linear-gradient(167deg, rgb(225 191 53) 49%, rgb(226 225 183) 98%) "
                // "linear-gradient(167deg, rgba(59, 41, 128, 1) 49%, rgba(155, 89, 182, 1) 98%)",
              }}
              value={data.ratingCount}
              title="Rating"
            />
          </CCol>
        </CRow>
        <CCard className="mb-4 mt-4 bg-white w-100 ">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  New Users
                </h4>
                <div className="small text-medium-emphasis">Last 7 Days</div>
              </CCol>
            </CRow>
            <CChartBar
              style={{ maxHeight: "300px" }}
              data={{
                labels: data.users.dates,

                datasets: [
                  {
                    label: "Users",

                    backgroundColor:
                      " rgba(244, 115, 110, 1)",

                    data: data.users.count,
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
        <CCard className="mb-4 mt-4 bg-white w-100 ">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  New Stations
                </h4>
                <div className="small text-medium-emphasis">Last 7 Days</div>
              </CCol>
            </CRow>

            <CChartBar
              style={{ maxHeight: "300px" }}
              data={{
                labels: data.stations.dates,

                datasets: [
                  {
                    label: "Stations",

                    backgroundColor:
                      "  rgba(25, 207, 26, 1) ",

                    data: data.stations.count,
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
        <CCard className="mb-4 mt-4 bg-white w-100 ">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  New Ratings
                </h4>
                <div className="small text-medium-emphasis">Last 7 Days</div>
              </CCol>
            </CRow>
            <CChartBar
              style={{ maxHeight: "300px" }}
              data={{
                labels: data.ratings.dates,

                datasets: [
                  {
                    label: "Ratings",

                    backgroundColor:
                      " rgba(155, 89, 182, 1) ",

                    data: data.ratings.count,
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </>
    )
  );
}
