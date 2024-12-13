using ProvaLettura.ViewModel;
using System.Windows;

namespace ProvaLettura
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            DataContext = new MainWindowViewModel();
        }
    }
}