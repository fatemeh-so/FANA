import { useState } from 'react'
import { Input } from '@nextui-org/react'
import { MagnifyingGlass, XCircle } from '@phosphor-icons/react'
import SearchResult from './SearchResult'
import { useSearchFocus } from '../contexts/FocusSearchContext'



const SearchInput = () => {
  const {
    handleInputBlur,
    handelFocus,
    searchResults,
    searchValue,
    handleSearch,
    setSearchFocus,
    setSearchValue
  } = useSearchFocus()

  const handleClearInput = () => {
    // Clear the search value when the clear icon is clicked
    setSearchFocus(false)
    // setSearchValue(null)
  }

  return (
    <>
      <Input
        onChange={handleSearch}
        onFocus={() => handelFocus(searchResults)}
        onBlur={() => handleInputBlur(true)}
        value={searchValue}
        // isClearable
        radius='sm'
        classNames={{
          input: [
            'w-[20rem] sm:w-[10rem]',
            'bg-transparent',
            'text-black/90 dark:text-white/90',
            'placeholder:text-default-700/50 dark:placeholder:text-white/60',
          ],
          innerWrapper: 'bg-transparent',
          inputWrapper: [
            'shadow-xl',
            'bg-default-200/50',
            'dark:bg-default/60',
            'backdrop-blur-xl',
            'backdrop-saturate-200',
            'hover:bg-default-200/70',
            'dark:hover:bg-default/70',
            'group-data-[focused=true]:bg-default-200/50',
            'dark:group-data-[focused=true]:bg-default/60',
            '!cursor-text',
          ],
        }}
        placeholder='Search...'
        startContent={<MagnifyingGlass />}
        endContent={
          <div className='w-fit '>
            <button
              className='cursor-pointer  w-[1rem] '
              onClick={handleClearInput}
            >
              {<XCircle size={20} color='#f6e9f7' />}
            </button>
          </div>
        }
      />
    </>
  )
}

export default SearchInput
