import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 69.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 109.99,
        date: new Date('2023-9-20')
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 99.99,
        date: new Date('2022-12-01')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 4.96,
        date: new Date('2021-10-29')
    },
    {
        id: 'e5',
        description: 'A watch',
        amount: 21.99,
        date: new Date('2023-03-04')
    }
]

function ExpensesOutput({expenses, expensesPeriod}) {
    return (
        <View>
            <ExpensesSummary
                periodName={expensesPeriod}
                expenses={DUMMY_EXPENSES}
            />
            <ExpensesList
                expenses={DUMMY_EXPENSES}
            />
        </View>
    );
}

export default ExpensesOutput;