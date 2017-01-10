var blogModule = angular.module('blog', []);
blogModule.controller('homeController', function() {
	   
	    this.composeBlog=false;
	    this.blog={ blogTitle:"",
	    enteredText:"",
	    authorName:"",
	    published:""
	    };

    this.blogContent=[];
	this.updateBlog = function() {
			var temp={};
			temp.title= this.blog.blogTitle;
			temp.author= this.blog.authorName;
			temp.createdDate= new Date();
			temp.content=this.blog.enteredText;
			temp.published=this.blog.published;
			this.blogContent.push(temp);
			
			// To reset the form elements
			this.blog={};
			// this.blogTitle= "";
	  //   	this.enteredText="";
	  //   	this.authorName="";

	}

	this.createNewForm = function() {
		this.composeBlog= true;
	}
});
