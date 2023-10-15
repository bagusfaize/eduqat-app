'use client'
import Button from '@/components/buttons/Button'
import { Tab, TabList, TabPanel, Tabs, tabClasses } from '@mui/joy'
import { FaRegEye } from 'react-icons/fa'
import Header from '@/components/headers/Header'
import SessionItem from '@/components/dnd/session/SessionItem'
import DragableList from '@/components/dnd/DragableList'

export default function Home() {
  return (
    <>
      <Header title='Event' onBack={'#'} />
      <main className='container p-7'>
        <ContentHeader />
        <Tabs
          size='lg'
          sx={{
            bgcolor: 'transparent',
            [`& .${tabClasses.root}[aria-selected="true"]`]: {
              paddingY: 2,
              paddingX: 1,
              color: '#7800EF',
              fontWeight: 600,
              fontSize: 14,
              bgcolor: 'transparent',
            },
          }}
        >
          <TabList>
            <Tab>Curriculum</Tab>
          </TabList>
          <TabPanel sx={{ background: 'white', paddingX: 0 }}>
            <EventInfo />
            <DragableList />
          </TabPanel>
        </Tabs>
      </main>
    </>
  )
}

const ContentHeader = () => (
  <div className='flex justify-between'>
    <span className='flex items-end space-x-6'>
      <h1 className='text-2xl font-medium'>Belajar dan praktek cinematic videography</h1>
      <p className='text-xs text-gray-500'>Last edited 18 October 2021 at 13:23</p>
    </span>
    <Button type='outline' onClick={() => { }}>
      <FaRegEye className='text-lg' />
      <span>Preview</span>
    </Button>
  </div>
)

const EventInfo = () => (
  <div className='border border-gray-300 rounded-md p-5 bg-white text-sm font-semibold mb-5'>
    Event Schedule: 24 Oktober 2021 at 16:30
  </div>
)
