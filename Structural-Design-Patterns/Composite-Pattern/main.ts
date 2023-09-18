import { File } from "./File";
import { Directory } from "./Directory";

let rootDirectory = new Directory("root");

let notAVirus = new File("NotAVirus.exe");
rootDirectory.addFile(notAVirus);


let usersDirectory = new Directory("users");
rootDirectory.addFile(usersDirectory);

let userOneDirectory = new Directory("User-One");
usersDirectory.addFile(userOneDirectory);

rootDirectory.inspect();

let userOneImagesDirectory = new Directory("Images");
userOneDirectory.addFile(userOneImagesDirectory);

let catImages = new Directory("Cat Images");
userOneImagesDirectory.addFile(catImages);

let catImageOne = new File("Cat Image One");
let catImageTwo = new File("Cat Image Two");
catImages.addFile(catImageOne);
catImages.addFile(catImageTwo);
catImages.inspect();

let imageOne = new File("Image One");
userOneImagesDirectory.addFile(imageOne);

let imageTwo = new File("Image Two");
userOneImagesDirectory.addFile(imageTwo);

let imageThree = new File("Image Three");
userOneImagesDirectory.addFile(imageThree);

userOneImagesDirectory.inspect();

let superSecretTextFile = new File("Super Secret Text File");
userOneDirectory.addFile(superSecretTextFile);
userOneDirectory.inspect();

let userTwoDirectory = new Directory("User-Two");
usersDirectory.addFile(userTwoDirectory);
let taxesFile = new File("Taxes File");
taxesFile.inspect();
userTwoDirectory.addFile(taxesFile);
userTwoDirectory.inspect();

let userThreeDirectory = new Directory("User-Three");
usersDirectory.addFile(userThreeDirectory);


let userThreeImagesDirectory = new Directory("Images");
userThreeDirectory.addFile(userThreeImagesDirectory);
let dogOne = new File("Dog Image");
userThreeImagesDirectory.addFile(dogOne);
userThreeImagesDirectory.inspect();

userThreeDirectory.inspect();
