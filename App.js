import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNav from './src/navigation/stacks/AppStackNav';
import ExpensesCtxProvider from './src/store/Expenses-ctx';

const App = () => {
  return <ExpensesCtxProvider>
            <NavigationContainer>
              <AppStackNav />
            </NavigationContainer>
          </ExpensesCtxProvider>
        
};

export default App;