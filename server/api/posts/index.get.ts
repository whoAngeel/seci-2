import PostModel from '../../models/Post';

export default defineEventHandler(async (event) => {
  try {
    const result = await PostModel.find()
    return result
  } catch (error) {
    console.log(error);
  }
})
