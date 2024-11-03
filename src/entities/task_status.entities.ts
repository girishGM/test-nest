export enum TaskStatus {
    TENANTFR_DEACTIVATED = 'DEACTIVATED',
    TENANTFR_ACTIVE = 'ACTIVE'
}

export enum TaskStatus1 {
    TENANTFR_DEACTIVATED = 'DEACTIVATED',
    TENANTFR_ACTIVE = 'ACTIVE'
}

export interface TaskStatus3 {
    status: TaskStatus,
    toshow: TaskStatus1
}