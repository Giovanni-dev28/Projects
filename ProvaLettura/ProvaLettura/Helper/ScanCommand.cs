using System;
using System.Windows.Input;

namespace ProvaLettura.Helper
{
    public class ScanCommand : ICommand
    {
        private readonly Action _execute;

        public ScanCommand(Action execute)
        {
            _execute = execute;
        }

        public event EventHandler? CanExecuteChanged;

        public bool CanExecute(object? parameter) => true;

        public void Execute(object? parameter)
        {
            _execute?.Invoke();
        }
    }
}
