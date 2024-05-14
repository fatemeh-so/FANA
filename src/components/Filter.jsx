import { Tabs, Tab } from '@nextui-org/react'
import { useSearchParams } from 'react-router-dom'
import { ScrollShadow } from '@nextui-org/react'
import { memo } from 'react'
function Filter() {
  const [searchParams, setSearchParams] = useSearchParams()

  const colors = ['warning']
  function handel(key) {
    searchParams.set('genre', key)
    setSearchParams(searchParams)
    // console.log(key);
  }
  return (
    <div className='flex   flex-wrap gap-4  overflow-hidden '>
      {/* <ScrollShadow hideScrollBar className=''> */}
      {colors.map((color) => (
        <Tabs
          key={color}
          color={color}
          aria-label='Tabs colors'
          radius='sm'
          // size='lg'
          fullWidth={true}
          onSelectionChange={(key) => handel(key)}
        >
          <Tab key='all' title='All' />
          {/* <Tab key='trend' title='Trending Right Now' /> */}
          <Tab key='pop' title='Pop' />
          <Tab key='hiphop' title='Hip Hop' />
          <Tab key='traditional' title='Traditional' />
          <Tab key='rock' title=' Rock' />
          <Tab key='instrumental' title=' Instrumental' />
          <Tab key='alternative' title=' Alternative' />
        </Tabs>
      ))}{' '}
      {/* </ScrollShadow> */}
    </div>
  )
}

export default memo(Filter)