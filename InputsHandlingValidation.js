// state:
const [inputs, setInputs] = useState({
    amount:{
        value:defaultValues ? defaultValues.amount.toString() : "", 
        isValid:true
    },
});
// inputs example:
<Input label="Amount" invalid={!inputs.amount.isValid}
       onChangeText={inputChangeHandler.bind(this, 'amount')}   value={inputs.amount.value} 
/>
// onchange handler
const inputChangeHandler =(inputIdentifier, inputvalue) =>{ // inputIdentifier tells which input: amount, date, name,password ...
    setInputs(currentInputs => {
        return {
            ...currentInputs,
            [inputIdentifier]:{value:inputvalue, isValid:true}
        }
    })
}
// onSubmit handler
const onSubmitHandler = ()=>{
    const expenseValues = {
        amount:+inputs.amount.value,
    };
    const isValidAmount = !isNaN(expenseValues.amount) && expenseValues.amount > 0;

    if(!isValidAmount || !...){
        setInputs(currentInputs => {
            return {
                amount:{value:currentInputs.amount.value, isValid:isValidAmount},
            }
        });
        return;
    }
    onSubmit(expenseValues);
};

// error feedback
{!inputs.amount.isValid && <Text style={styles.errorText}>Error ! - Please double check your data !</Text>}
