import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { User } from '../models/User'

@Resolver()
export class UserResolver {
  private data: User[] = []

  @Query(() => [User])
  async user() {
    return this.data
  }

  @Mutation(() => User)
  async createUser(
    @Arg('name') name: string
  ) {
    const user =  {
      id: '1',
      name
    }

    this.data.push(user)

    return user
  }
}