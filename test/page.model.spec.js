var chai = require('chai');
var spies = require('chai-spies');
var expect = require('chai').expect
var should = require('chai').should()
var mocha = require('mocha');
var models = require('../models');
var marked = require('marked');
var Page = models.Page;
var User = models.User;
chai.use(spies);

describe('Page model', function () {

    beforeEach(function() {
      page = Page.build();
  });

  describe('Virtuals', function () {
    describe('route', function () {
      it('returns the url_name prepended by "/wiki/"', function(){
        page.urlTitle = 'ourteststitle';
        expect(page.route).to.equal('/wiki/ourteststitle')
      });
    });
    describe('renderedContent', function () {
      it('converts the markdown-formatted content into HTML', function(){
        page.content = 'ourexamplepagecontent';
        // chai.spy.on(marked);
        // expect(marked).to.have.been.called();
        expect(marked(page.content)).to.equal('<p>ourexamplepagecontent</p>\n');
      });
    });
  });

var titlesAry;

  beforeEach(function(done) {
     titlesAry = ['yi', 'yi2', 'yi3', 'yi4']
      var contentAry = ['peter','peter2','peter3', 'peter4']
      var tagsAry = [['solid','test'],['solid','test'],['nothing', 'shared'],['solid','test', 'apple']]
      
      var pagesOfPromises = [];

      for(var i = 0; i < titlesAry.length; i++){
        var currentPageObj = {};
        currentPageObj.title = titlesAry[i];
        currentPageObj.content = contentAry[i];
        currentPageObj.tags = tagsAry[i];
        pagesOfPromises.push(Page.create(currentPageObj));
      }

      Promise.all(pagesOfPromises)   
      .then(function(){
        done();
      })
      .catch(done);
  });

      

  describe('Class methods', function () {
    describe('findByTag', function () {
      xit('gets pages with the search tag', function(done){
        Page.findByTag('solid')
        .then(function (pages){
          expect(pages).to.have.lengthOf(2);
          done();
        })
        .catch(done);
      });
      xit('does not get pages without the search tag', function(){
        Page.findByTag('weak')
        .then(function(pages) {
          expect(pages).to.have.lengthOf(0);
        });
      });
  });
});
  var resultingSimilarPage;
  beforeEach(function(done) {
        resultingSimilarPage = 
        Page.findOne({
            where: {
              urlTitle: "yi"
              }
        })
        .then(function (page) {

            if (page === null) {
                return done(new Error('That page was not found!'));
            }

            return page.findSimilar();

        })
        .then(function(similarPages) {
          done();
          return similarPages;
        })
        .catch(done);

  });

  describe('Instance methods', function () {
    describe('findSimilar', function (done) {


      it('never gets itself', function(done) {
      
        resultingSimilarPage.then(function(similarPages) {
          console.log('HERE ARE THE SIMILARPAGES 0', typeof similarPages[0]);
          console.log('HERE ARE THE SIMILARPAGES 1', similarPages[1].title);

          expect(similarPages.every(function(pageObject){ return  pageObject.title !== 'yi'})).to.equal(true);
          // expect(similarPages.length).to.equal(1);
          // expect(similarPages[0].title).to.not.equal('yi');

          done();
        })
        .catch(done);
        
      });

      it('gets other pages with any common tags', function(done){
        // toBeTackledLater
        // resultingSimilarPage.then(function(similarPages) {

        //   expect(similarPages.every(function(pageObject){ return  pageObjec})).to.equal(true);
        //   // expect(similarPages.length).to.equal(1);
        //   // expect(similarPages[0].title).to.not.equal('yi');

        //   done();
        // })
        // .catch(done);


      });



      it('does not get other pages without any common tags');
    });
  });


  afterEach(function(done){
      var pagesOfPromises = [];

      for(var i = 0; i < titlesAry.length; i++){
        var currentPageObj = {};
        currentPageObj.urlTitle = titlesAry[i];
        var wherePageObj = {};
        wherePageObj.where = currentPageObj;
        pagesOfPromises.push(Page.destroy(wherePageObj));
      }

      Promise.all(pagesOfPromises)   
      .then(function(){
        done();
      })
      .catch(done);
  });


  describe('Validations', function () {
    it.only('errors without title', function(done){
        var pageWithoutTitle = {content: 'peter', tags: ['solid','test']};
        var result = Page.create(pageWithoutTitle)
         .then(function(page) {
          page.validate();
          done();
         });

         console.log('heres the result!', result);

    });
    it('errors without content');
    it('errors given an invalid status');
  });

  describe('Hooks', function () {
    it('it sets urlTitle based on title before validating');
  });

});