<form action="scriptPhp/inscription.php" method="POST">
                        <div class="form-group">
                            <label for="userNameInscription">Identifiant</label>
                            <input type="text" class="form-control" name="userNameInscription" id="userNameInscription" placeholder="Entrez votre identifiant">
                            <!-- message d'erreur récuperer en get -->
                            <small class="msgError"> 
                                <?php 
                                    $msgError = $_GET['msgError'];
                                    if(isset($_GET)){
                                        echo $msgError;
                                    } 
                                ?>
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="userPasswordInscription">Mot de passe</label>
                            <input type="password" class="form-control" name="userPasswordInscription" id="userPasswordInscription" placeholder="Entrez votre mot de passe">
                            <!-- message d'erreur récuperer en get -->
                            <small class="msgError">
                                <?php 
                                    $msgError = $_GET['msgError1'];
                                    if(isset($_GET)){
                                        echo $msgError;
                                    } 
                                ?>
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="userMailInscription">Adresse E-mail</label>
                            <input type="email" class="form-control" name="userMailInscription" id="userMailInscription" aria-describedby="emailHelp" placeholder="Entrez votre adresse mail">
                            <!-- message d'erreur récuperer en get -->
                            <small class="msgError">
                                <?php 
                                    $msgError = $_GET['msgError2'];
                                    if(isset($_GET)){
                                        echo $msgError;
                                    } 
                                ?> 
                            </small>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="particulierCheck" id="particulierCheck">
                            <label class="form-check-label" for="particulierCheck">Particulier</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="professionnelCheck" id="professionnelCheck">
                            <label class="form-check-label" for="professionnelCheck">Professionnel</label>
                        </div>
                        <div>
                            <!-- message d'erreur récuperer en get -->
                        <small>
                            <?php 
                                $msgError = $_GET['msgError3'];
                                if(isset($_GET)){
                                    echo $msgError;
                                } 
                            ?>
                        </small>
                        </div>
                        <div>
                            <button type="submit" id="inscriptionBtn" class="btn btn-primary">Inscription</button>
                        </div>
                    </form>