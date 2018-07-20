const expect = require('expect');
const request = require('supertest');

const {app} = require('../server/server');
const {toDo} = require('../server/models/toDo');

const toDos = [{text: 'first test todo'},{text:'second text todo'}];

beforeEach((done) => {
    toDo.remove({}).then(() => {
        return toDo.insertMany(toDos);
    }).then(() => done());
});

describe('POST /todos', () => {
    it('should create a new ToDo', (done) => {
        var text = "Test todo text";
        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text);
        })
        .end((err,res) => {
            if(err){
                return done(err);
            }

            toDo.find({text}).then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe("Test todo text");
                done();
            }).catch((e) => done(e));
        });
    });

    it('should not create invalid toDo', (done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
            if(err){
                return done(err);
            }
            toDo.find().then((todos) => {
                expect(todos.length).toBe(2);
                done();
            }).catch((e) => done(e));
        })
    });
});

describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.todos.length).toBe(2);
        })
        .end(done);
    });
});