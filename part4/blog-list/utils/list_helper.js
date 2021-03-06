const {forEach} = require("lodash/fp/_util");
const {countBy, sortBy, keyBy, reduce} = require("lodash/collection");
const {uniqBy, indexOf, findIndex, uniq} = require("lodash/array");
const {property, iteratee} = require("lodash/util");
const {max, groupBy, zip, maxBy} = require("lodash");
const {value} = require("lodash/seq");
const {mapKeys, findKey, mapValues} = require("lodash/object");
const dummy = (blogs) => {
	return 1;
}

const totalLikes = (blogs) => {
	if(blogs.length > 0) {
		const reducer = (totLikes, blogLike) => {
			return totLikes + blogLike
		}
		return blogs.map((blog) => blog.likes).reduce(reducer, 0)
	}
	return 0;
}

const  favoriteBlog = (blogs) => {
	if(blogs.length < 1){
		return {
			title: '',
			author: '',
			likes: 0,
		}
	}
	const likes = blogs.map((blog) => blog.likes)
	const max = Math.max(...likes)
	const favoriteBlog = blogs.find(blog => blog.likes === max)

	return {
		title: favoriteBlog.title,
		author: favoriteBlog.author,
		likes: favoriteBlog.likes,
	}
}

const mostBlogs =  (blogs) => {
	if(blogs.length > 0) {
		const mostBlogCount = countBy(blogs, property('author'))
		const maxValue = max(sortBy(mostBlogCount))
		const mappedValues = mapValues(mostBlogCount, function (val, key) {
			return {author: key, blogs: val}
		})
		const mapped = mapKeys(mappedValues, function (val, key) {
			if (maxValue === val.blogs) {
				return 'mostBlog'
			}
			return 'others'
		})
		return mapped.mostBlog
	}
	return { author: '' , blogs: 0}
}

const  mostLikes =  (blogs) => {
	if(blogs.length > 0) {
		const authors = uniq(blogs.map(blog => blog.author))

		let obj = authors.map(author => ({author: author, likes: 0}))

		for (const objElement of obj) {
			for (const blElement of blogs) {
				if(objElement.author === blElement.author){
					objElement.likes += blElement.likes
				}
			}
		}
		const maxLikes = maxBy(obj, property('likes'))
		return maxLikes
	}
	return { author: '' , likes: 0}
}
module.exports = {
	dummy,
	totalLikes,
	favoriteBlog,
	mostBlogs,
	mostLikes
}
