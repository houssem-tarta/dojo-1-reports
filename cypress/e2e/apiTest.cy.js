describe('test api avec cypress', () => {

    it('Récupérer une liste dutilisateurs', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
          expect(response.status).to.equal(200);
        });
      });

      it('poster',()=> {
        cy.request('post',"https://jsonplaceholder.typicode.com/posts", {
            id: 1,
            title: 'cypress',
            body: 'cypressRespons',
            userId: 1
        }).then((response)=>{
            expect(response.status).to.equal(201);
            expect(response.body.body).to.equal('cypressRespons');
            expect(response.body.title).to.equal('cypress');
            expect(response.body.id).to.equal(101);
  
        })


      })
      it('update',()=> {
        cy.request('patch',"https://jsonplaceholder.typicode.com/posts/2", {
            id: 2,
            title: 'cypress',
            body: 'cypressRespons',
            userId: 1
        }).then((response)=>{
            expect(response.status).to.equal(200);
            expect(response.body.body).to.equal('cypressRespons');
            expect(response.body.title).to.equal('cypress');
            expect(response.body.id).to.equal(2);
  
        })


      })
    });