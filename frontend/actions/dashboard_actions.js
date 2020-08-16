export const OPEN_DASHBOARD = 'OPEN_DASHBOARD';
export const OPEN_ACTIVITY = 'OPEN_ACTIVITY';
export const OPEN_EXPENSES = 'OPEN_EXPENSES';
// export const OPEN_GROUP = 'OPEN_GROUP';
// export const OPEN_FRIEND = 'OPEN_FRIENDS';

export const openDashboard = dashboard => {
  return {
    type: OPEN_DASHBOARD,
    dashboard
  }
};

export const openActivity = activity => {
  return {
    type: OPEN_ACTIVITY,
    activity
  }
};

export const openExpenses = expenses => {
  return {
    type: OPEN_EXPENSES,
    expenses
  }
};