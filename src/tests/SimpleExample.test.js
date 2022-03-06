// IF WE DIDN'T DEFINE { globals: true }
// import { test, expect } from 'vitest'

const user = {
    name: 'Schneider',
    age: 21,
}

// naming the test and then running a function that test will run
test('Schneider is 21', () => {
    expect(user.name).toBe('Schneider')
    expect(user.age).toBe(21)
})