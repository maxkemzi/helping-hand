import React from "react";
import Avatar from "@components/Avatar/Avatar";
import Button from "@components/Button/Button";
import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import FormElement from "@components/FormElement/FormElement";
import Input from "@components/Input/Input";
import SettingsItem from "@components/SettingsItem/SettingsItem";
import styles from "./AccountSettings.module.scss";

const AccountSettings = () => {
	const validationSchema = yup.object().shape({
		email: yup.string(),
		password: yup.string(),
		username: yup.string()
	});

	return (
		<div>
			<h3 className={styles.title}>Акаунт</h3>
			<Formik
				initialValues={{username: "", email: "", password: ""}}
				onSubmit={() => console.log("Submit")}
				validationSchema={validationSchema}
				validateOnBlur
			>
				<Form className={styles.form}>
					<SettingsItem>
						<h4 className={styles["small-title"]}>Зображення профілю</h4>
						<div className={styles.user}>
							<Avatar
								className={styles.avatar}
								imagePath=""
								width={80}
								height={80}
								fallbackVariant="light"
							/>
							<div className={styles.btns}>
								<Button
									className={styles.btn}
									variant="outline"
									text="Завантажити"
								/>
								<Button
									className={styles.btn}
									variant="outline"
									text="Видалити"
								/>
							</div>
						</div>
						<div className={styles.fields}>
							<Field
								label="Ім'я"
								className={styles.field}
								name="username"
								component={FormElement}
								element={Input}
							/>

							<Field
								label="Email"
								className={styles.field}
								name="email"
								component={FormElement}
								element={Input}
							/>

							<Field
								label="Пароль"
								type="password"
								className={styles.field}
								name="password"
								component={FormElement}
								element={Input}
							/>
						</div>
						<Button className={styles["submit-btn"]} text="Зберегти" isSubmit />
					</SettingsItem>
					<SettingsItem>
						<div className={styles.inner}>
							<div>
								<h4 className={styles["small-title"]}>Видалити акаунт</h4>
								<p className={styles.text}>
									Після видалення акаунту ви втратите всі ваші дані.
								</p>
							</div>
							<Button variant="outline" text="Видалити" />
						</div>
					</SettingsItem>
				</Form>
			</Formik>
		</div>
	);
};

export default AccountSettings;
