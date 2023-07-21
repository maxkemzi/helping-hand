import React from "react";
import Avatar from "@components/Avatar/Avatar";
import Button from "@components/Button/Button";
import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import FormTextField from "@components/FormTextField/FormTextField";
import Input from "@components/Input/Input";
import Typography from "@components/Typography/Typography";
import Divider from "@components/Divider/Divider";
import classNames from "classnames";
import ScreenSizes from "@utils/constants/screenSizes";
import styles from "./AccountSettings.module.scss";
import useWindowSize from "../../../hooks/useWindowSize";

const AccountSettings = () => {
	const {width} = useWindowSize();
	const validationSchema = yup.object().shape({
		email: yup.string(),
		password: yup.string(),
		username: yup.string()
	});

	return (
		<>
			<Typography className={styles.title} component="h3" variant="h3">
				Account
			</Typography>
			<Formik
				initialValues={{username: "", email: "", password: ""}}
				onSubmit={() => console.log("Submit")}
				validationSchema={validationSchema}
				validateOnBlur
			>
				<Form
					className={classNames(styles.form, {
						[styles.phone]: width <= ScreenSizes.PhoneWidth
					})}
				>
					<Typography
						className={styles["small-title"]}
						variant="h4"
						component="h4"
					>
						Profile image
					</Typography>
					<div className={styles.user}>
						<Avatar
							className={styles.avatar}
							imagePath=""
							size={80}
							fallbackVariant="light"
						/>
						<div className={styles.btns}>
							<Button className={styles.btn} variant="outline" text="Upload" />
							<Button className={styles.btn} variant="outline" text="Delete" />
						</div>
					</div>
					<div className={styles.fields}>
						<Field
							label="Name"
							className={styles.field}
							name="username"
							component={FormTextField}
							element={Input}
						/>

						<Field
							label="Email"
							className={styles.field}
							name="email"
							component={FormTextField}
							element={Input}
						/>

						<Field
							label="Password"
							type="password"
							className={styles.field}
							name="password"
							component={FormTextField}
							element={Input}
						/>
					</div>
					<Button className={styles["submit-btn"]} text="Save" isSubmit />
				</Form>
			</Formik>
			<Divider className={styles.divider} />
			<div
				className={classNames(styles.inner, {[styles.custom]: width <= 860})}
			>
				<div className={styles.row}>
					<Typography
						className={styles["small-title"]}
						component="h4"
						variant="h4"
					>
						Delete account
					</Typography>
					<Typography variant="body1" component="p">
						After deleting your account, you will lose all your data.
					</Typography>
				</div>
				<Button variant="outline" text="Delete" />
			</div>
		</>
	);
};

export default AccountSettings;
