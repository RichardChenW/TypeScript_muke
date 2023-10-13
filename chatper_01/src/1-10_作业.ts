enum EnumAuditstatus {
	MANAGER_ADUIT_FAIL = -1,
	NO_ADUIT,
	MANAGER_ADUIT_SUCCESS,
	FINAL_ADUIT_SUCCESS,
}

interface Expense {
	id: number;
	event: string;
	time: Date;
	enumAuditStatus: EnumAuditstatus;
}

class MyAduit {
	getAduitstatus(status: EnumAuditstatus): void {
		if (status == EnumAuditstatus.NO_ADUIT) {
			let info: Expense;
			info = {
				id: 1,
				event: '没有审核',
				time: new Date(2023, 10, 11),
				enumAuditStatus: status,
			};
			console.log('储存信息', info);
		} else if (status == EnumAuditstatus.MANAGER_ADUIT_SUCCESS) {
			console.log('经理审核通过');
		} else if (status == EnumAuditstatus.FINAL_ADUIT_SUCCESS) {
			console.log('财务审核通过');
		}
	}
}

const addExpense = (expense: Expense) => {
	return EnumAuditstatus.MANAGER_ADUIT_SUCCESS;
};

const res = addExpense({id:"",event:"",time:new Date(),enumAuditStatus:EnumAuditstatus.FINAL_ADUIT_SUCCESS})
console.log(res);