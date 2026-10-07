#!/bin/bash

#===================== Function ===================================

function exists_in_list() {
    LIST=$1
    DELIMITER=$2
    VALUE=$3
    [[ "$LIST" =~ ($DELIMITER|^)$VALUE($DELIMITER|$) ]]
}

function DialogGen() { # https://www.geeksforgeeks.org/linux-unix/shell-scripting-dialog-boxes/
    dialog --yesno "All '*.txt'-files in the  'Out'-subdirectory will be deleted! Are you sure?" 0 0
} #  Zero for Yes, one for not. --output-fd 1 2>&1 1>/dev/tty

#==================================================================

list_files=false
delete_files=false

#==================================================================

# In Bash scripting, positional parameters follow a strict order:
# $0 represents the name of the script itself, $1 stands for the first argument
# passed to the script, $2 for the second, and so forth.

num_pars=$#  # This is the actual number of optional parameters / invocation flags:
#echo "num_pars = $num_pars"
if [ $num_pars -gt 1 ]; then
    echo "Input error: The number of optional flags > 1 ==> Aborting!"
    exit 0
elif [ $num_pars -eq 1 ]; then
     # there is exactly 1 parameter at the 1st position in the argument list
    arg1="$1"
    size=${#arg1}
    #echo "1 = $1, A1 = $arg1, size = $size"
    if [ $size -gt 2 ]; then # e.g. -h*, -l* or -d*
        echo "Input error: the optional flag consists of a dash '-' and at least 2 letters ==> Aborting!"
        exit 0
    fi
fi

# see https://kodekloud.com/blog/bash-getopts/
OPTSTRING=":ldh"
# the  options are: -l, -d, and -h. None of these requires an argument
# cf. l: in which case -l requires an argument, i.e. parameter without "-" 

while getopts ${OPTSTRING} flag; do
    case "${flag}" in
        l) list_files=true;;
        d) delete_files=true;;
        h) echo "Usage: my_pythrun.sh -Flag"
           # echo "---------------------------------------------------------------------------------------------------------------------" 
           # echo "*** After the input check and usage instructions the program output is redirected to the file 'my_pythrun.log' ***"
           echo "---------------------------------------------------------------------------------------------------------------------"
           echo "Flag  *ONLY 1 Flag is allowed*"                                                                                                    
           echo "---------------------------------------------------------------------------------------------------------------------"  
           echo "      *NO  Flag*: every single py-file '*.py' in the current 'AuL'-folder is processed: python *.py > ./Out/*.txt"           
           echo "      if the corresponding './Out/*.txt'-file either does *NOT* exist or is *OLDER* than the base file '*.py'."      
           echo "---------------------------------------------------------------------------------------------------------------------"  
           echo "  l   (= list) List all '*.py' and '*.txt' files together with their sizes and modification dates and quit."     
           echo "---------------------------------------------------------------------------------------------------------------------"  
           echo "  d   (= delete) Delete all './Out/*.txt' files, display the resulting contents of the './Out/'-subfolder and quit."
           echo "---------------------------------------------------------------------------------------------------------------------"  
           echo "  h   (= help) Display the current instructions of usage and quit."                                                  
           echo "      Each of the flags 'l, d' can be combined *ONLY* with the 'h'-flag!"                               
           echo "---------------------------------------------------------------------------------------------------------------------"  
           exit 0;;                                                                                                              
        ?) echo "Invalid Flag: -${OPTARG} ==> Aborting!"
           exit 1;;
    esac
done

# A question mark (?) is a special character that is matched when an invalid
# option is passed (i.e., anything other than -a, -r, or -d in this script).

#echo "$OPTIND"
# num_opts=$(($OPTIND - 1))  # This is the actual number of optional invocation flags:
# #echo "$num_opts"
# if [[ $num_opts -gt 1 ]]; then
#     echo "Input error: The number of optional flags > 1 ==> Aborting the program!"
#     exit 0
# fi

#================================================================================
#========================= Program start ========================================
#================================================================================

current_datetime=$(date +"%d.%m.%Y, %H:%M:%S")
echo "Current date and time: $current_datetime"
echo "====================================================================================================================="

# https://unix.stackexchange.com/questions/677507/how-to-check-arguments-given-to-a-bash-script-efficiently
# Command line parsing is done now. The code below acts on the used options.
# This code would typically do sanity checks, like emitting errors for incompatible options, 
# missing options etc.

! "$delete_files" && ! "$list_files" && \
    echo "NO invocation flags! All '*.py' and './Out/*.txt' files will be *processed and analyzed*!"

"$delete_files" && echo "Invocation flag -d: all './Out/*.txt' files will be deleted!"

"$list_files" && \
    echo "Invocation flag -l: all '*.py' and './Out/*.txt' files will be listed together with their sizes and modification dates!"

#echo "Current invocation flags: list_files=$list_files, delete_files=$delete_files"

#=====================================================================================================================
#=====================================================================================================================
#=====================================================================================================================

# Stream 0 ("STDIN"): "Standard input", the default input stream to read data from the keyboard.
# Stream 1 ("STDOUT"): "Standard output", the default output stream used to show normal text in the terminal.
# Stream 2 ("STDERR"): "Standard error", the default output stream used to display errors or other text for special purposes in the terminal.
# Streams 3-9: Additional, freely usable streams. They're not used by default and do not exist until something attempts to use them.

#exec 2>&1 1>./my_pythrun.log

#=====================================================================================================================
#=====================================================================================================================
#=====================================================================================================================

#https://www.cyberciti.biz/faq/bash-get-basename-of-filename-or-directory-name/

# current directory from which the script my_pythrun.sh is invoked
echo "====================================================================================================================="
CURRDIR=${PWD}
echo "Script executed from: '$CURRDIR'"
# directory in which the script my_pythrun.sh is located
BASEDIR=$(realpath $(dirname $0))
echo "Script location: '$BASEDIR'"
echo ""
SUBDIR_NAME="Out"
SUBDIR_PATH=${BASEDIR}/${SUBDIR_NAME}
echo "Subdirectory location: '$SUBDIR_PATH':"  
echo "Subdirectory location stripped: '$SUBDIR_NAME'"  
echo "====================================================================================================================="

#=====================================================================================================================
# 1. Either REMOVE all white spaces from filenames of any type: 's/\s//g' or
# 2. REPLACE all white spaces from filenames of any type with '_': 's/\s/_/g'
# Note: "perl", must be installed!!!

rename 's/\s//g' $BASEDIR/*.py # remove white spaces in files of 'py'-type
rename 's/\s//g' ./$SUBDIR_NAME/*.txt # remove  white spaces in file of 'txt'-type

#=====================================================================================================================
#                                                  List files
#=====================================================================================================================
#                                                  $BASEDIR: *.py
#=====================================================================================================================

cd $BASEDIR
#echo "Changed to ${PWD}"
ALL_PY_FILES=(*.py)
echo "                  List of ALL '*.py'-Files in '$BASEDIR' directory:"
echo "====================================================================================================================="

for f_py in ${ALL_PY_FILES[@]}; do
    stat -c "%-20n %7s     %.19y" "$f_py" # %y = time of last data modification
done

#=====================================================================================================================
#                                                  $SUBDIR_NAME: *.txt
#=====================================================================================================================

echo "====================================================================================================================="
echo "                    List ALL '*.txt'-Files in the '$SUBDIR_PATH' subdirectory:"
echo "====================================================================================================================="

cd $SUBDIR_PATH
#echo "Changed to ${PWD}"
ALL_TXT_FILES=(*.txt)
has_txt=true

for f in ${ALL_TXT_FILES[@]}; do
    if [ -f "$f" ]; then
        #echo "There are '*.txt'-files in './$SUBDIR_NAME/*.txt'!"
        stat -c "%-20n %7s     %.19y" "$f"
    else
        echo "++++++++++++++++++++++++++++++++++ ATTENTION! NO '*.txt'-files in './$SUBDIR_NAME'! +++++++++++++++++++++++++++++++++"
        has_txt=false
        break
    fi
    ALL_TXT_FILES+=("$f")
done
#echo ${ALL_TXT_FILES[@]}
cd $BASEDIR

if $list_files;then
    echo "====================================================================================================================="
    echo "Program exit!"
    exit 0
fi

#=====================================================================================================================
#https://askubuntu.com/questions/491509/how-to-get-dialog-box-input-directed-to-a-variable
# https://bash.cyberciti.biz/guide/Bash_display_dialog_boxes
# https://ryanstutorials.net/bash-scripting-tutorial/bash-input.php

if $delete_files && ! $has_txt;then
    echo "++++++++++++++++++++++++ ATTENTION! NO '*.txt'-files in './$SUBDIR_NAME' are to be DELETED! +++++++++++++++++++++++++"
    echo "====================================================================================================================="
    echo "Program exit!"
    exit 0
fi    
    
if $delete_files && $has_txt;then
    # DialogGen  #echo "Return: $?"
    # exitcode=$?
    # #clear
    # #echo "exitcode = $exitcode" #; res = $($?)
    # if [ $YesNo -eq 0 ]; then
    read -p "All '*.txt'-files in the './$SUBDIR_NAME' subdirectory will be deleted! Are you sure? (Yes/No): " YesNo
    #echo "$YesNo"
    if [[ "$YesNo" == "Yes" ]] || [[ "$YesNo" == "yes" ]] || [[ "$YesNo" == "Y" ]] || [[ "$YesNo" == "y" ]]; then
        rm -rf $SUBDIR_PATH/*.txt
        echo "OK! ALL '*.txt'-files in the '$SUBDIR_PATH' subdirectory are DELETED now!"
    else
        echo "OK! ALL '*.txt'-files in the '$SUBDIR_PATH' subdirectory are left INTACT!"
    fi
    echo "====================================================================================================================="
    echo "Program exit!"
    exit 0
fi

#=====================================================================================================================
#                                            MAIN LOOP
#=====================================================================================================================

cd $BASEDIR
#echo "Changed to ${PWD}"
ALL_PY_FILES=(*.py)
echo "====================================================================================================================="
echo "                             Processing '*.py'-Files in $BASEDIR directory:"
echo "====================================================================================================================="

for f_py in ${ALL_PY_FILES[@]}; do
    #stat -c "%-20n %7s     %.19z" "$f_py" # %y time of last data modification
    # The "modification date" (or mtime) indicates the last time the file's
    # content was changed, while the "change date" (or ctime) reflects the last
    # time the file's metadata (permissions, ownership, or filename) was modified
    date_py=$(date -r $f_py +"%d-%m-%Y %H:%M:%S")
    date_py_sec=$(date -r $f_py +"%s")
    f_base=${f_py%.*}
    f_txt=$f_base
    f_txt+=".txt"
    #echo "${f_txt}"
    #
    if exists_in_list "${ALL_TXT_FILES[*]}" " " "$f_txt"; then
        echo "'$f_py' ==> '$f_txt':"
        cd ./$SUBDIR_NAME
        #stat -c "%-20n %7s     %.19y" "$f_txt" # -r = display the last modification time
        date_txt=$(date -r $f_txt +"%d-%m-%Y %H:%M:%S")
        date_txt_sec=$(date -r $f_txt +"%s")
        echo "$date_txt ($f_txt) vs. $date_py ($f_py)"
        # echo "$date_txt_sec ($f_txt) vs. $date_py_sec ($f_py)"
        if [[ $date_txt_sec < $date_py_sec ]]; then # '<' means that txt-file is OLDER (i.e. created BEFORE) THAN py-file
            # i.e. LESS seconds elapsed since 01.01.1970: |-----|T_txt-----|T_py-----|now--->
            echo "'$f_txt' is outdated! ==> processing '$f_py' ..."
            #rm $file_C
            cd $BASEDIR
            python3 $f_py > ./$SUBDIR_NAME/$f_txt
             if [ $? -eq 0 ]; then # success
                 echo "'$f_py' processed succesfully, new '$f_txt' is created!"
                 echo "---------------------------------------------------------------------------------------------------------------------"
             else  # error
                 echo "+++++ 1. Attention: Python-processing of '$f_py' failed! Aborting!"
                 exit 1
             fi
        else # date_txt <= date_py ==> date_txt is newer as date_py
            # 01-07-2025 19:00:56 (Kreisflaeche.txt) vs. 29-06-2025 22:37:15 (Kreisflaeche.py)
            echo "'$f_txt' is up to date! ==> '$f_txt' skipped!"
            echo "---------------------------------------------------------------------------------------------------------------------"
        fi
        cd $BASEDIR
        continue
    else
        echo "'$f_py' ==> '?.txt' ==> processing '$f_py' ..."
        python $f_py > ./$SUBDIR_NAME/$f_txt
        if [ $? -eq 0 ]; then # success
            echo "'$f_py' processed succesfully, './$SUBDIR_NAME/$f_txt' is created!"
            echo "---------------------------------------------------------------------------------------------------------------------"
        else # failure
            echo "+++++ 2. Attention: Python-processing of '$f_py' failed! Aborting!"
            exit 1
        fi
        cd $BASEDIR
        continue
    fi
done
echo "All '*.py'-files have been processed"
echo "====================================================================================================================="
echo "Program exit!"

exit 0
