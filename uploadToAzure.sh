#touch .bashrc
#source ~/.bashrc

zip -r /deployment.zip .

az login --service-principal --username "2d15cab6-17ee-407d-ae19-82eb5ada0c5f" --password "~bv8Q~kmPbll43TIKnCdY-GeYuvSprEU-xsy0c~J" --tenant "7f83731f-3765-4d43-9263-6675c74320ce"

az functionapp deployment source config-zip -g tekionazurejspoc -n TEKION-AZURE-JS-POC --src deployment.zip

az functionapp deployment source config-zip -g tekionazurejspoc -n AZURE-FUNCTION-NEXT --src deployment.zip

az logout

