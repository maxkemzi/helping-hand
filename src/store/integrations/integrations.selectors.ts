import {RootState} from "@store/index";

export const getIsIntegrationsFetching = (state: RootState) =>
	state.integrationsState.isFetching;

export const getIsIntegrationsConnected = (state: RootState) =>
	state.integrationsState.isConnected;

export const getIntegrationHeadCells = (state: RootState) =>
	state.integrationsState.headCells;

export const getIntegrationCells = (state: RootState) =>
	state.integrationsState.cells;

export const getIntegrationProfileHeadCells = (state: RootState) =>
	state.integrationsState.profileHeadCells;

export const getIntegrationProfileCells = (state: RootState) =>
	state.integrationsState.profileCells;
