import mongoose from 'mongoose'
import Collections from '../models/saveCollections'
import { server } from '../index'
import { api, initialUser } from './helpers'

beforeEach(async () => {
  await Collections.deleteMany({})

  for (const user of initialUser) {
    const user1 = new Collections(user)
    await user1.save()
  }
})

test.skip('notes are returned as json', async () => {
  const requestBody = {
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
      email: 'shiny921x@gmail.com',
      emailVerified: true,
      displayName: 'Milanesa Mcgregor',
      isAnonymous: false,
      photoURL: 'https://lh3.googleusercontent.com/a/AAcHTtcg7S2fgAEdLx1FsIQNtzLNSRw5yjuwNzyXt8SalQ=s96-c',
      providerData: [
        {
          providerId: 'google.com',
          uid: '118250372472395229428',
          displayName: 'Milanesa Mcgregor',
          email: 'shiny921x@gmail.com',
          phoneNumber: null,
          photoURL: 'https://lh3.googleusercontent.com/a/AAcHTtcg7S2fgAEdLx1FsIQNtzLNSRw5yjuwNzyXt8SalQ=s96-c'
        }
      ],
      stsTokenManager: {
        refreshToken: 'APZUo0QD4HYUfpvpZQ_Z54ImXI97H6V0qDeUHjVp3WpqeduQV_pwiN58XuFQaN6a6Kaid0K6rG6i3nWYP6DEOqp-PegTemGjxY7hkoS__JOoJghq3fIXmczS223-T3ep6_QTcpzpvCgscnQ8DJG602p9sqtTk3jRaOXaGdiCcyPcaJzUgC_giS03sYsV_IUS3dqP1RZTt4vbSX9dm8qrf91Pv9DCWI-YRHAjRVZURqHKt7bnqUy7NfIJmHQXBlqthq4jMamB3Pp3hQWmcE0KI7ARuiAU8Kkglm1Y51d3fDr5pmnjKPwvd8UHNsYRT63anHyn8NQ36OC7ktTc2eklYUwiC43P6-xX4gLhMdArghoNEyU2ubzWr_WmRatgQ-PjC5REZlvJQWomp2dcPe4SqtRKFTbpSTcSrZd-LekCpAi_rDmEBM3Nioc',
        accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3YmFiYWFiYTEwNWFkZDZiM2ZiYjlmZjNmZjVmZTNkY2E0Y2VkYTEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTWlsYW5lc2EgTWNncmVnb3IiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0Y2c3UzJmZ0FFZEx4MUZzSVFOdHpMTlNSdzV5anV3Tnp5WHQ4U2FsUT1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS90ZXN0LWxvZ2luLTJjNjNlIiwiYXVkIjoidGVzdC1sb2dpbi0yYzYzZSIsImF1dGhfdGltZSI6MTY4Njc5NzI4NCwidXNlcl9pZCI6ImtPa3NTWWEzc2hjRjdCdHBXY3FCMmZLaWFsczIiLCJzdWIiOiJrT2tzU1lhM3NoY0Y3QnRwV2NxQjJmS2lhbHMyIiwiaWF0IjoxNjg2Nzk3Mjg0LCJleHAiOjE2ODY4MDA4ODQsImVtYWlsIjoic2hpbnk5MjF4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTE4MjUwMzcyNDcyMzk1MjI5NDI4Il0sImVtYWlsIjpbInNoaW55OTIxeEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.fCfTIeK0o5lQ3bYuYvPeqESq_ID7qO74nfjfGiJ9mGdSFY6sw6C-Vjw-TsVD_bsJzuroS0Cge44AUwYSXFDvIYTex_lf9GN_uUPyHwQub8vj9Ayqc6mGRIqLZ6agBg977mj9RFWC4xX0hM6gcISKaiAB3q2twPwydCETpwsXdcBvba0QCXAt_oNeZ-1aMYUVP40Tt9CPMbFOd6CjJGZwKf3q3Oc5liCl8hH6p3p8zJVfUbdGXc7j70Ui0H-s34kVIQZnDJic9hQsc_GUZ-RidyDfXXanT2nOgQrJ4xQeRVKxEyWN0hUu6chYrx1Eq9s8b6pikmG5z8lTcTcVWJmYsA',
        expirationTime: 1686800883636
      },
      createdAt: '1685773828001',
      lastLoginAt: '1686797284890',
      apiKey: 'AIzaSyDXvHIK0JOP0pXZmORKIKBNte3ZnWufgNQ',
      appName: '[DEFAULT]'
    },
    uid: 'kOksSYa3shcF7BtpWcqB2fKials2'
  }

  await api
    .post('/register')
    .send(requestBody)
    .expect(200)
    .expect('Content-type', /application\/json/)
})

test('getting collections user', async () => {
  const requestBody = { uid: 'kOksSYa3shcF7BtpWcqB2fKials2test1' }

  await api
    .post('/gettingCollections')
    .send(requestBody)
    .expect(200)
})

afterAll(() => {
  mongoose.connection.close()
  server.close()
})
