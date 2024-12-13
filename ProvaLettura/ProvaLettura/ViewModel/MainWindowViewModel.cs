using ProvaLettura.Helper;
using System.Windows.Input;

namespace ProvaLettura.ViewModel
{
    public class MainWindowViewModel
    {
        public ICommand ScanBarcode { get; }

        public MainWindowViewModel()
        {
            ScanBarcode = new ScanCommand(ShowScanningPage);
        }

        private void ShowScanningPage()
        {
            BarcodeScanning barcodeScanning = new BarcodeScanning();
            barcodeScanning.ShowDialog(); //blocco l'interazione con la finestra principale
        }
    }
}
