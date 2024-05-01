import React from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from '@nextui-org/react'
import { useOpenAlbum } from '../contexts/openAlbumContext'
import HomeMusicChild from '../features/home/HomeMusicChild'

const musics = [
  {
    id: 3,
    title: 'Lili',
    artist: 'Aaron',
    singerId: 1,
    AlbumId: 1,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: '/public/coverArt/cover.jpg.webp',
    PlayCount: 1,
  },
  {
    id: 4,
    title: 'Falling slowly',
    artist: 'Glen Hansard',
    singerId: 2,
    AlbumId: 2,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: 'https://nextui-docs-v2.vercel.app/images/album-cover.png',
    PlayCount: 2,
  },
  {
    id: 5,
    title: 'Caving in',
    artist: 'Syml',
    singerId: 3,
    AlbumId: 3,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
    PlayCount: 2,
  },
  {
    id: 6,
    title: 'love story',
    artist: 'Taylor Swift',
    singerId: 3,
    AlbumId: 3,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: '/public/coverArt/retro-synthwave-artwork.jpg',
    PlayCount: 2,
  },
  {
    id: 7,
    title: 'Lili',
    artist: 'Aaron',
    singerId: 1,
    AlbumId: 1,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: '/public/coverArt/cover.jpg.webp',
    PlayCount: 1,
  },
  {
    id: 8,
    title: 'Falling slowly',
    artist: 'Glen Hansard',
    singerId: 2,
    AlbumId: 2,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: 'https://nextui-docs-v2.vercel.app/images/album-cover.png',
    PlayCount: 2,
  },
  {
    id: 9,
    title: 'Caving in',
    artist: 'Syml',
    singerId: 3,
    AlbumId: 3,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
    PlayCount: 2,
  },
  {
    id: 10,
    title: 'love story',
    artist: 'Taylor Swift',
    singerId: 3,
    AlbumId: 3,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: '/public/coverArt/retro-synthwave-artwork.jpg',
    PlayCount: 2,
  },
  {
    id: 8,
    title: 'Falling slowly',
    artist: 'Glen Hansard',
    singerId: 2,
    AlbumId: 2,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: 'https://nextui-docs-v2.vercel.app/images/album-cover.png',
    PlayCount: 2,
  },
 
]
export default function AlbumModal() {
  const [modalPlacement, setModalPlacement] = React.useState('auto')
  const { isOpenAlbum, handelOpenAlbum, music } = useOpenAlbum()
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  // console.log(music.artist);
  return (
    <div className='flex flex-col gap-2'>
      {/* <Button onPress={onOpen} className="max-w-fit">Open Modal</Button>
      <RadioGroup
        label="Select modal placement"
        orientation="horizontal"
        value={modalPlacement}
        onValueChange={setModalPlacement}
      >
        <Radio value="auto">auto</Radio>
        <Radio value="top">top</Radio>
        <Radio value="bottom">bottom</Radio>
        <Radio value="center">center</Radio>
        <Radio value="top-center">top-center</Radio>
        <Radio value="bottom-center">bottom-center</Radio>
      </RadioGroup> */}
      <Modal
        isOpen={isOpenAlbum}
        placement={modalPlacement}
        onOpenChange={onOpenChange}
        onClose={handelOpenAlbum}
        scrollBehavior={scrollBehavior}
    size="5xl"

      >
        <ModalContent >
          {(onClose) => (
            <>
                 <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
                <p>
                  Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit
                  duis sit officia eiusmod Lorem aliqua enim laboris do dolor
                  eiusmod. Et mollit incididunt nisi consectetur esse laborum
                  eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt
                  nostrud ad veniam. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nullam pulvinar risus non risus hendrerit
                  venenatis. Pellentesque sit amet hendrerit risus, sed
                  porttitor quam. Magna exercitation reprehenderit magna aute
                  tempor cupidatat consequat elit dolor adipisicing. Mollit
                  dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                  officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et
                  mollit incididunt nisi consectetur esse laborum eiusmod
                  pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad
                  veniam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
                <p>
                  Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit
                  duis sit officia eiusmod Lorem aliqua enim laboris do dolor
                  eiusmod. Et mollit incididunt nisi consectetur esse laborum
                  eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt
                  nostrud ad veniam. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nullam pulvinar risus non risus hendrerit
                  venenatis. Pellentesque sit amet hendrerit risus, sed
                  porttitor quam. Magna exercitation reprehenderit magna aute
                  tempor cupidatat consequat elit dolor adipisicing. Mollit
                  dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                  officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et
                  mollit incididunt nisi consectetur esse laborum eiusmod
                  pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad
                  veniam.
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
