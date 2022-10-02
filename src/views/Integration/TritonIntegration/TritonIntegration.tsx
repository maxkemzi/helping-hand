import React, {useEffect} from "react";
import {
	getIntegrationCells,
	getIntegrationHeadCells,
	getIntegrationProfileCells,
	getIntegrationProfileHeadCells
} from "@store/integrations/integrations.selectors";
import styles from "./TritonIntegration.module.scss";
import IntegrationsService from "../../../services/integrations/integrations.service";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";

const TritonIntegration = () => {
	const dispatch = useAppDispatch();
	const headCells = useAppSelector(getIntegrationHeadCells);
	const cells = useAppSelector(getIntegrationCells);
	const profileHeadCells = useAppSelector(getIntegrationProfileHeadCells);
	const profileCells = useAppSelector(getIntegrationProfileCells);

	useEffect(() => {
		Promise.all([
			dispatch(IntegrationsService.getMarks()),
			dispatch(IntegrationsService.getProfile())
		]);
	}, [dispatch]);

	return (
		<>
			<div className={styles.wrapper}>
				<table className={styles.table}>
					<thead>
						<tr>
							{profileHeadCells.map(cell => (
								<th>{cell}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{profileCells.map((c: string[]) => (
							<tr>
								{c.map(cell => (
									<td>{cell}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className={styles.wrapper}>
				<table className={styles.table}>
					<thead>
						<tr>
							{headCells.map(cell => (
								<th>{cell}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{cells.map((c: string[]) => (
							<tr>
								{c.map(cell => (
									<td>{cell}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default TritonIntegration;
