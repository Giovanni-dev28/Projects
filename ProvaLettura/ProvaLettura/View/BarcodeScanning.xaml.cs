using ProvaLettura.ViewModel;
using System.Windows;
using System.Windows.Input;

namespace ProvaLettura
{
    public partial class BarcodeScanning : Window
    {
        public BarcodeScanning()
        {
            InitializeComponent();
            DataContext = new BarcodeScanningViewModel();
        }

        private void WritingBarcode(object sender, KeyEventArgs e)
        {
            var viewModel = (BarcodeScanningViewModel)DataContext;

            if (e.Key == Key.Enter)
            {
                viewModel.Barcode= viewModel.Barcode.Replace("D", "");
                MessageBox.Show($"Codice inserito: {viewModel.Barcode}");
                this.Close();
                return;
            }
            if (e.Key == Key.Space) 
                viewModel.Barcode += " ";
            else
                viewModel.Barcode += e.Key.ToString();
        }
    }
}