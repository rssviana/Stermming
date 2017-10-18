
import javax.swing.JOptionPane;

/**
 *
 * @author Ronan
 */

public class A1IA {
    static String getWord () {
        String w;
        
        w = JOptionPane.showInputDialog("Digite a palavra: ");
        
        return w;
    }
    
    static char[] convertToChar (String w) {
        char fragmentWord[];
        
        fragmentWord = w.toCharArray();
        
        return fragmentWord;
    }
    
    static void verifyPrefix (char fragWord[]) {
        int keepGoing, sizeWord;
        
        
        sizeWord = fragWord.length;
        

        // caso a palavra começe com 'ambi'
        if (fragWord[0] == 'a' || fragWord[0] == 'A') {
            if(fragWord[1] == 'm') {
                if(fragWord[2] == 'b') {
                    if(fragWord[3] == 'i') {
                        JOptionPane.showMessageDialog(null,"Sua palavra Tem prefixo 'ambi' ");
                    }
                }    
            }
        }
        
        //caso a palavra começe com 'trans'
        else if (fragWord[0] == 't' || fragWord[0] == 'T') {
            if (fragWord[1] == 'r'){
                if (fragWord[2] == 'a') {
                    if (fragWord[3] == 's') {
                        JOptionPane.showMessageDialog(null,"Sua palavra Tem prefixo 'tras' ");
                    }
                }
            }
        }
        
        else {
            do{
                keepGoing = JOptionPane.showConfirmDialog (null, "Deseja inserir outra palavra ? ");
                
                if(keepGoing == 1) { 
                    A1IA.getWord(); 
                    keepGoing = 0;   
                }
                
            }while(keepGoing == 1);
        }
    }
    
    static void verifySufix (char fragWord[]) {
    
    }
    
    public static void main (String [] arg) {
        int i;
        String result, word;
        char fragmentedWord[] ;
        
        
        word = getWord();
        
        fragmentedWord = convertToChar(word);
        
        
        verifyPrefix(fragmentedWord);
    }
}
