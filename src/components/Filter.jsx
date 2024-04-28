import { Tabs, Tab } from '@nextui-org/react'
import { useSearchParams } from 'react-router-dom'
import { ScrollShadow } from '@nextui-org/react'
export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams()

  const colors = ['warning']
  function handel(key) {
    searchParams.set('genre', key)
    setSearchParams(searchParams)
    // console.log(key);
  }
  return (
    <div className='flex sm:hidden flex-wrap gap-4 mt-[2rem] sm:no-scrollbar '>
      {/* <ScrollShadow hideScrollBar className=''> */}
        {colors.map((color) => (
          <Tabs
            key={color}
            color={color}
            aria-label='Tabs colors'
            radius='sm'
            onSelectionChange={(key) => handel(key)}
          >
            <Tab key='trend' title='Trending Right Now' />
            <Tab key='pop' title='Pop' />
            <Tab key='hiphop' title='Hip Hop' />
            <Tab key='rock' title='Metal Rock' />

          </Tabs>
        ))}{' '}
      {/* </ScrollShadow> */}
    </div>
  )
}
