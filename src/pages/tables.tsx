import { mdiTableBorder, mdiTableOff } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import Button from '../components/Button'
import CardBox from '../components/CardBox'

import LayoutAuthenticated from '../layouts/Authenticated'
import NotificationBar from '../components/NotificationBar'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import TableSampleClients from '../components/Table/SampleClients'
import { getPageTitle } from '../config'

const TablesPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Tables')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiTableBorder} title="Tables" main>
          <Button
            href="#"
            target="_blank"
            icon={mdiTableBorder}
            label="Tabels"
            color="contrast"
            roundedFull
            small
          />
        </SectionTitleLineWithButton>

        {/* <NotificationBar color="info" icon={mdiMonitorCellphone}>
          <b>Responsive table.</b> Collapses on mobile
        </NotificationBar> */}

        <CardBox className="mb-6" hasTable>
          <TableSampleClients />
        </CardBox>

        <SectionTitleLineWithButton icon={mdiTableOff} title="Empty Documents" />

        <NotificationBar color="danger" icon={mdiTableOff}>
          <b>Empty card.</b> When there&apos;s nothing to show
        </NotificationBar>

        {/* <CardBox>
          <CardBoxComponentEmpty />
        </CardBox> */}
      </SectionMain>
    </>
  )
}

TablesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default TablesPage
