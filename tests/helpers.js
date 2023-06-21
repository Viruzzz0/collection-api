import supertest from 'supertest'
import { app } from '../index'
const api = supertest(app)

const initialUser = [
  {
    user: 'nickname',
    collections: [{
      id: 'collections',
      type: '__folder__',
      name: 'collections',
      path: 'collections',
      parentPath: null,
      parentID: null,
      children: []
    }],
    auth: {
      uid: 'kOksSYa3shcF7BtpWcqB2fKials2',
      email: 'testx@gmail.com',
      emailVerified: true,
      displayName: 'Milanesa Test',
      isAnonymous: false,
      photoURL: 'https://lh3.googleusercontent.com/a/AAcHTtcg7S2fgAEdLx1FsIQNtzLNSRw5yjuwN',
      providerData: [
        {
          providerId: 'google.com',
          uid: '118250372472395229428',
          displayName: 'Milanesa Test',
          email: 'testx@gmail.com',
          phoneNumber: null,
          photoURL: 'https://lh3.googleusercontent.com/a/AAcHTtcg7S2fgAEdLx1FsIQNtzLNSRw5yjuwN'
        }
      ],
      createdAt: '1685773828002',
      lastLoginAt: '1686797284892',
      appName: '[DEFAULT]'
    },
    uid: 'kOksSYa3shcF7BtpWcqB2fKials2test2'
  },
  {
    user: 'nickname',
    collections: [{
      id: 'collections',
      type: '__folder__',
      name: 'collections',
      path: 'collections',
      parentPath: null,
      parentID: null,
      children: []
    }],
    auth: {
      uid: 'kOksSYa3shcF7BtpWcqB2fKials2test2',
      email: 'mctestx@gmail.com',
      emailVerified: true,
      displayName: 'Milanesa Shiny',
      isAnonymous: false,
      photoURL: 'https://lh3.googleusercontent.com/a/AAcHTtcg7S2fgAEdLx1FsIQNtzLNSRw5yjuwNzyXt8',
      providerData: [
        {
          providerId: 'google.com',
          uid: '118250372472395229428',
          displayName: 'Milanesa Shiny',
          email: 'mctestx@gmail.com',
          phoneNumber: null,
          photoURL: 'https://lh3.googleusercontent.com/a/AAcHTtcg7S2fgAEdLx1FsIQNtzLNSRw5yjuwNzy'
        }
      ],

      createdAt: '1685773828002',
      lastLoginAt: '1686797284891',
      appName: '[DEFAULT]'
    },
    uid: 'kOksSYa3shcF7BtpWcqB2fKials2test2'
  }
]

export { initialUser, api }
