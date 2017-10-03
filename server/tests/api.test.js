const request = require('supertest');
const app = require('../index');

describe('POST /api/auth/register', () => {
    test('Should receive object with token and user object', ()=>{
        return request(app)
            .post('/api/auth/register')
            .expect(201)
            .send({
                email:'boast@boast.boast',
                password: 'boastytoast'
            })
            .then(res=>{
                expect(res.body).toHaveProperty('token');
                expect(res.body.token).toContain('JWT');
                expect(res.body).toHaveProperty('user');
                expect(res.body.user).toHaveProperty('_id');
                expect(res.body.user).toHaveProperty('email');
                expect(res.body.user).toHaveProperty('name');
            })
    })
})

describe('POST /api/auth/login', () => {
    test('Should receive object with token and user object', ()=>{
        return request(app)
            .post('/api/auth/login')
            .expect(200)
            .send({
                email:'boast@boast.boast',
                password: 'boastytoast'
            })
            .then(res=>{
                expect(res.body).toHaveProperty('token');
                expect(res.body.token).toContain('JWT');
                expect(res.body).toHaveProperty('user');
                expect(res.body.user).toHaveProperty('_id');
                expect(res.body.user).toHaveProperty('email');
                expect(res.body.user).toHaveProperty('name');
            })
    })
})
