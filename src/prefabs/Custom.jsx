
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import searchIcon from '../assets/icons/icon-search.svg'

export function _Search() {
    return (
        <InputGroup className="flex items-center" >
            <InputLeftElement pointerEvents='none'>
                <img src={searchIcon} alt="search icon" className="w-5 h-5" />
            </InputLeftElement>
            <Input type='search' placeholder='Search for movies or TV series' size='md'
                _placeholder={{ opacity: .5, }}
                border={'none'} outline={'none'} focusBorderColor='none' htmlSize={6} />
        </InputGroup>
    )
}