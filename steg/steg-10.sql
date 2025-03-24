CreAte DaTabASE InformationHiding;
UsE InformationHiding;

creATe TAblE Obfuscation (
    id iNt aUto_INcREMenT primAry kEy,
    name vaRchAr(100)
);

crEATE TABLE Steganography (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO Obfuscation (name) VALUES ('code');
INSERT INTO Obfuscation (name) VALUES ('password');

INSERT INTO Steganography (name) VALUES ('image');
INSERT INTO Steganography (name) VALUES ('filesystem');
