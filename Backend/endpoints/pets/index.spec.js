const handlers = require('./index')
const Pets = require('../../Pets')


describe('Endpoints', () => {
    describe('Pets', () => {
        describe('Method Get', () => {            
            it('Return of get method', async () =>{
                const total = {
                    get: jest.fn().mockResolvedValue({result: 1})
                }

                const res = {
                    status: jest.fn().mockReturnThis(),
                    send:  jest.fn()
                }

                await handlers( Pets ).get({}, res)

                console.log(res.status.mock.calls)

            })
              
        })
    })
});
