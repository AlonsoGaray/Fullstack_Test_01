import mongoose from 'mongoose'

const TEST_MONGODB_URI =
  process.env.TEST_MONGODB_URI ||
  'mongodb://localhost:27017/project_management_test'

beforeAll(async () => {
  await mongoose.connect(TEST_MONGODB_URI)
})

afterEach(async () => {
  const collections = mongoose.connection.collections
  for (const key in collections) {
    await collections[key].deleteMany({})
  }
})

afterAll(async () => {
  await mongoose.connection.close()
})
