import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled  from 'styled-components';
import Button from '@material-ui/core/Button/index';
import { CountryRegionData } from 'react-country-region-selector';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import RadioButtonGroup from './RadioButtonGroup';
import FormField from './FormField';
import InfoText from "./InfoText";
import { validateForm, validEmailRegex } from '../utils/formValidation';
import { bindActionCreators } from 'redux';
import  { addContactWatcher, contactListWatcher }  from '../actions';

const CountryRegionWrapper = styled.div`
	margin: 10px 0;
	display: flex; 
	flex-direction: column;
`;

const ActionBar = styled.div`
	padding: 20px 0;
	display: flex;
	justify-content: space-between;
`;

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contact: this.getDefaultContact(),
			errors: this.getDefaultContact(),
			dirty: false
		};
	}

	getRegions = country => {
		if (!country) {
			return [];
		}
		return country[2].split("|").map(regionPair => {
			let [regionName, regionShortCode = null] = regionPair.split("~");
			return regionName;
		});
	};

	getDefaultContact = () => {
		return {
			name:'',
			address: '',
			phone: '',
			email: '',
			gender: '',
			country: '',
			region: '',
			note:''
		}
	};

	componentDidMount(){
		this.props.contactListWatcher({});
	}

	updateError = (value, name) => {
		let errors = this.state.errors;
		let errTxt = '';
		const len = value.length;

		switch (name) {
			case 'name':
				errTxt =
					(len < 3 || len > 20)
						? 'Name must be min 3 characters or max 20 long!'
						: '';
				break;
			case 'address':
				errTxt =
					(len < 3 || len > 100)
						? 'Address must be min 3 characters or max 100 long!'
						: '';
				break;
			case 'phone':
				errTxt =
					(len < 10 || len > 10)
						? 'Enter valid 10 digit mobile no'
						: '';
				break;
			case 'email':
				errTxt =
					validEmailRegex.test(value)
						? ''
						: 'Email is not valid!';
				break;
			case 'gender':
				errTxt =
					len < 4
						? 'Please select gender'
						: '';
				break;
			case 'country':
				errTxt =
					len < 1
						? 'Select country'
						: '';
				break;
			case 'region':
				errTxt =
					len < 1
						? 'Select region'
						: '';
				break;
			case 'note':
				errTxt =
					(len < 3 || len > 20)
						? 'Note must be min 3 characters or max 20 long! '
						: '';
				break;
			default:
				break;
		}

		errors[name] = errTxt;
		let contact = this.state.contact;
		contact[name] = value;
		this.setState({errors, contact, dirty: true});
	};

	handleChange = name => event => {
		event.preventDefault();
		this.updateError(event.target.value, name);
	};

	handleSubmit = () => {
		const fields = Object.keys(this.getDefaultContact());
		fields.forEach(
			(name) => {
				this.updateError(this.state.contact[name], name)
			}
		);
		this.setState({ newRecordAdded: false});
		if(validateForm(this.state.errors, this.state.dirty)) {
			new Promise((resolve, reject) => {
				this.props.addContactWatcher(this.state.contact, resolve, reject);
			}).then(() => {
				this.setState({ newRecordAdded: true});
				this.clearContact();
			}).catch((error) => {
				console.log(error);
			});
		}else{
			console.error('Invalid Form');
		}
	};

	clearContact = () => {
		this.setState({
			contact: this.getDefaultContact(),
			errors: this.getDefaultContact()
		})
	};

	render() {
		const {name, address, phone, email, gender, country, region, note} = this.state.contact;
		const { errors, newRecordAdded } = this.state;

		return (
			<div className='wrapper'>
				<div className='form-wrapper'>
					<form onSubmit={this.handleSubmit} noValidate>
						<FormField
							id="standard-name"
							label="Name"
							name="name"
							value={name}
							errors={errors}
							changeData={this.handleChange}
						/>
						<FormField
							id="standard-address"
							label="Address"
							name="address"
							value={address}
							errors={errors}
							changeData={this.handleChange}
						/>
						<FormField
							id="standard-phone"
							label="Phone"
							name="phone"
							value={phone}
							errors={errors}
							changeData={this.handleChange}
						/>
						<FormField
							id="standard-email"
							label="Email"
							name="email"
							value={email}
							errors={errors}
							changeData={this.handleChange}
						/>
						<div>
							<RadioButtonGroup
								name="gender"
								errors={errors}
								changeData={this.handleChange}
								value={gender} />
							<CountryRegionWrapper>
								<TextField
									id="country"
									label="Country"
									value={country}
									select
									required={true}
									onChange={this.handleChange('country')}
								>
									{CountryRegionData.map((option, index) => (
										<MenuItem key={index} value={option}>
											{option[0]}
										</MenuItem>
									))}
								</TextField>
								{errors['country'].length > 0 &&
									<InfoText value={errors['country']} type={'error'} />}
								<TextField
									id="region"
									label="Region"
									value={region}
									select
									required={true}
									onChange={this.handleChange("region")}
								>
									{this.getRegions(country).map(
										(option, index) => (
											<MenuItem key={index} value={option}>
												{option}
											</MenuItem>
										)
									)}
								</TextField>
								{errors['region'].length > 0 &&
								<InfoText value={errors['region']} type={'error'} />}
							</CountryRegionWrapper>
							<FormField
								id="standard-note"
								label="Note"
								name="note"
								value={note}
								required={true}
								errors={this.state.errors}
								changeData={this.handleChange}
							/>
							<ActionBar>
								<Button variant="contained" color="secondary" component="span" onClick={this.clearContact}>
									Clear
								</Button>
								<Button variant="contained" color="primary" component="span" onClick={this.handleSubmit}>
									Submit
								</Button>
							</ActionBar>
							{newRecordAdded && <InfoText value={'New record added successfully!'} type={'success'} />}
						</div>
					</form>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		addContactWatcher,
		contactListWatcher
	}, dispatch);
};

export default connect(null, mapDispatchToProps)(ContactForm);

