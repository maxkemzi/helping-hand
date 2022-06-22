import React from "react";
import Avatar from "@components/Avatar/Avatar";
import Button from "@components/Button/Button";
import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import FormElement from "@components/FormElement/FormElement";
import Input from "@components/Input/Input";
import SettingsItem from "@components/SettingsItem/SettingsItem";
import Typography from "@components/Typography/Typography";
import styles from "./AccountSettings.module.scss";

const AccountSettings = () => {
	const validationSchema = yup.object().shape({
		email: yup.string(),
		password: yup.string(),
		username: yup.string()
	});

	return (
		<>
			<Typography className={styles.title} component="h3" variant="h3">
				Акаунт
			</Typography>
			<Formik
				initialValues={{username: "", email: "", password: ""}}
				onSubmit={() => console.log("Submit")}
				validationSchema={validationSchema}
				validateOnBlur
			>
				<Form className={styles.form}>
					<SettingsItem>
						<Typography
							className={styles["small-title"]}
							variant="h4"
							component="h4"
						>
							Зображення профілю
						</Typography>
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
								<Typography
									className={styles["small-title"]}
									component="h4"
									variant="h4"
								>
									Видалити акаунт
								</Typography>
								<Typography variant="body1" component="p">
									Після видалення акаунту ви втратите всі ваші дані.
								</Typography>
							</div>
							<Button variant="outline" text="Видалити" />
						</div>
					</SettingsItem>
				</Form>
			</Formik>
		</>
	);
};

export default AccountSettings;
