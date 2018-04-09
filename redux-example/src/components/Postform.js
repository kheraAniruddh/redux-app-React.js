import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../actions/postActions';

class Postform extends Component {
		constructor(props) {
		super(props);
		this.state = {
		title: '',
		body: ''
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit .bind(this);
	}

	onChange(e) {
		this.setState({[e.target.name] : e.target.value});
	}

	onSubmit(e) {
		e.preventDefault();
		const post = {
			title: this.state.title,
			body: this.state.body
		}

		this.props.createPost(post);
	}

	render() {
		return(
			<div className="Postform" onSubmit={this.onSubmit}>
				<h1> Add Post</h1>
				<form>
					<div>
					<label> Title: </label>
					<input type="text" name="title" onChange= {this.onChange} value={this.state.title}/>
					</div>
					<br/>
					<div>
					<label> Body: </label>
					<textarea name="body" value={this.state.body} onChange= {this.onChange}/>
					</div>
					<br/>
					<button type="submit"> Post </button>
				</form>	
			</div>);
	}
}

Postform.propTypes = {
	createPost: PropTypes.func.isRequired
}


export default connect(null, {createPost})(Postform);