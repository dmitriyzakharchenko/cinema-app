import React, { Fragment } from 'react';
import InnerModal from './innerModal';
import { AvForm, AvField, AvCheckbox, AvCheckboxGroup } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';



class Modals extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
			isInnerModalOpen: false
		};

		this.closeModal = this.closeModal.bind(this);
		this.openModal = this.openModal.bind(this);
	}

	closeModal() {
		this.setState({
			isModalOpen: false
		});
	}

	openModal() {
		this.setState({
			isModalOpen: true
		});
	}

	render() {
		const modalStyle = {
			overlay: {
				backgroundColor: "rgba(0, 0, 0,0.5)"
			}
		};
		return (
			<Fragment>
				<div className="text-white" onClick={this.openModal}>
					<i className="fa fa-user register"></i>
				</div>

				<InnerModal
					isModalOpen={this.state.isModalOpen}
					closeModal={this.closeModal}
					style={modalStyle}
				>
					<AvForm>
						<AvField name="nameCustomMessage" label="Ваше имя" type="text" validate={{
							required: { value: true, errorMessage: 'Пожалуйста, введите ваше имя' },
							pattern: { value: '^[A-Za-z0-9]+$', errorMessage: 'Вы можете вводить только латинские цифры и буквы' },
							minLength: { value: 4, errorMessage: 'Это поле должно содержать от 4 до 16 символов' },
							maxLength: { value: 16, errorMessage: 'Это поле должно содержать от 4 до 16 символов' }
						}} />
						<AvField name="emailProp" label="Email" type="text" validate={{
							email: true,
							required: { value: true, errorMessage: 'Пожалуйста, введите вашу почту' }
						}} />
						<AvField name="required" label="Пароль" type="password" validate={{
							required: { value: true, errorMessage: 'Пожалуйста, введите ваш пароль' },
							minLength: { value: 6, errorMessage: 'Это поле должно содержать от 6 символов' }
						}} />
						<AvCheckboxGroup inline name="minCheckedCheckboxList" label="Выберите свои любимые жанры" validate={{
							required: { value: true, errorMessage: 'Вы должны выбрать минимум 2 жанра'},
							min: {value: 2, errorMessage: 'Вы должны выбрать минимум 2 жанра'}
							}}>
							<AvCheckbox label="Фильмы" value="Фильмы" />
							<AvCheckbox label="Мультфильмы" value="Мультфильмы" />
							<AvCheckbox label="Триллеры" value="Триллеры" />
							<AvCheckbox label="Трейлеры" value="Трейлеры" disabled />
        				</AvCheckboxGroup>
						<div className="modal-btn">
							<Button color="primary">Отправить</Button>
							<Button color="primary" onClick={this.closeModal}>Закрыть</Button>
							
						</div>
					</AvForm>
				</InnerModal>
			</Fragment>
		);
	}
}

export default Modals;