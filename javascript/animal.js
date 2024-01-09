// define a parent class, called 'Animal'
class Animal {
  getDescription()
  {
     // using a method to get generic descriptions
     return "Welcome to the Jungle Oasis, a place for everyone to learn a bit more about some very fascinating " +
                 "animals. Everyone is able to explore their animal passion and even develop a newer interest in any other amazing " +
                 "creatures which we present. We present some intriguing facts, images and even sound boxes for you to hear " +
                 "these beautiful creatures in real life. We focus on some the most captivating creatures of the mighty animal " +
                 "kingdom, including Lions, Tigers, Jaguars, Chimpanzees and even Pandas.";
  }
  // using a method to gte the file path of the sound of the corresponding page
  getSound()
  {
      return "sounds/jungle-sound.wav";
  }
  getImage()
  {
      return "images/jungle.png"
  }
}

// Subclass 'Lion' extending 'Animal'
class Lion extends Animal {
// Overriding the method to get a specific description for Lions
getDescription()
  {
        return "Lions (also known as Panthera Leo) are the world's second largest cat, after a Tiger." +
        " They typically live in the savannah or other grass areas in the sub-saharan regions of Africa."+
        " Most Lions live in Africa but there is a small endangered group in regions of India."+
        " Their lifespan concludes of about 10 to 15 years and their sizes range from 1.4 to 2.5 metres." +
        " Typically, they have a speed of 50 mph and are predators of cub Hyenas and Leopards." +
        " Lions are diurnal, which means they typically hunt during the day," +
        " but they can adapt and hunt at night if necessary";
  }

  // Overriding the method to get a specific sound file path for Lions
  getSound()
  {
      return "sounds/lion-sound.wav";
  }
  getImage()
  {
      return "images/lions.jpg"
  }
}

// Subclass 'Panda' extending 'Animal'
class Panda extends Animal {
// Overriding the method to get a specific description for Pandas
getDescription()
  {
    return "Pandas (also known as Ailuropoda melanoleuca) are very special black and white bears which are mainly found"+
    "in the dense Bamboo Forests in high mountains of China - they are a typical symbol of peace in China. The giant "+
    "Pandas are excellent swimmers as well as climbers, at 5 months, a cub learns how to start climbing, ready for its life ahead. " +
    "Pandas are incredible creatures which rely less on visual memory but are dependent on spatial memory (the ability" +
    "to remember things by location). Giant Pandas spend about 10 to 16 hours on feeding, typically crisp Bamboo.";
  }

  // Overriding the method to get a specific sound file path for Pandas
  getSound()
  {
      return "sounds/panda-sound.mp3";
  }
  getImage()
  {
      return "images/panda.webp"
  }

}

// Subclass 'Tiger' extending 'Animal'
class Tiger extends Animal {
// Overriding the method to get a specific description for Tigers
getDescription()
  {
    return "Tigers (also known as Panthera Tigris) are the largest cats on Earth which can weigh up to 720 pounds and can " +
    "stretch up to 6 feet. Tigers are the national animal of India and Bangladesh, symbolising independence, royalty and power."+
    " Tigers primarily hunt deer, but as opportunistic predators, they can also eat wild birds, fish, rodents," +
    " amphibians, reptiles. A large deer can provide a tiger with food for a whole week, however typically, only one" +
    " out of 10 hunts are successful on average.";
  }
// Overriding the method to get a specific sound file path for Tigers
getSound()
{
    return "sounds/tiger-sound.mp3";
}
getImage()
{
    return "images/tigers.avif"
}
}

// Subclass 'Chimpanzee' extending 'Animal'
class Chimpanzee extends Animal {
// Overriding the method to get a specific description for Chimpanzee
getDescription()
  {
    return "Chimpanzees (also known as Pan troglodytes) are great apes native to the savannah of tropical Africa." +
   " They are one of the closest living relatives to humans, which share about 98-99% of their DNA with us." +
   " Chimpanzees are highly intelligent and known for their tool-making abilities. They live in social groups " +
   " and make sure to have each other's back to protect each other - always signalling one another - " +
   "and their diet includes fruits, nuts, seeds, and even small animals. Some chimps can even eat up to 200 types of fruit!";
  }

 // Overriding the method to get a specific sound file path for Chimpanzees
getSound()
{
    return "sounds/chimpanzee-sound.mp3";
}
getImage()
{
    return "images/chimpanzee.avif"
}
}

// Subclass 'Elephant' extending 'Animal'
class Elephant extends Animal {
// Overriding the method to get a specific description for Elephant
getDescription()
  {
    return "Elephants (also known as Loxodonta africana or Elephas maximus) are" +
    "majestic mammals known for their immense size, long trunks, and distinctive tusks. " +
    "They typically stand up to 3m high and weighing up to 6,000kg on average. Males only reach their full "+
    "size at 35-40 years - that’s well over half their lifespan as wild elephants can live for up to 60-70 years"+
    " A baby elephant can weigh up to 120kg when they are born. " +"An elephant’s skin is 2.5cm thick in most places."+
    " The folds and wrinkles in their skin can retain up to 10 times more water than flat skin, which helps to" +
    " cool them down. They keep their skin clean and protect themselves from sunburn by taking regular dust and mud baths.";
  }

 // Overriding the method to get a specific sound file path for Elephant
getSound()
{
    return "sounds/elephant-sound.mp3";
}
getImage()
{
    return "images/elephant.jpg"
}
}

// Subclass 'Penguin' extending 'Animal'
class Penguin extends Animal {
// Overriding the method to get a specific description for Penguins
getDescription()
  {
    return "Penguins (also known as Aptenodytes forsteri) are flightless seabirds that live almost exclusively below the"+
   " equator. The 18 different species of penguins come widely in different shape and size but all have black bodies and white" +
   " bellies. This protective countershading allows them to hide from predators like leopards, seals and orcas while they" +
   " swim. Their habitat is the Southern Hemisphere and the Galapagos Islands. Depending on the specie, they live from 6" +
   " to 25 years. When a Penguin dives into the water it can reach a speed of up to 12-kilometres per hour and when in full" +
   " speed, some can reach up to 27 km/h. As for diving, the larger penguins can go deeper, with Emperor Penguins  being capable of" +
   " diving down to depths of 565-metres.";
  }

 // Overriding the method to get a specific sound file path for Penguins
getSound()
{
    return "sounds/penguin-sound.mp3";
}

getImage()
{
    return "images/penguin.jpg"
}
}
// Function to find and return the description of a specific anima
function animalDescriptionFinder(animalName)
{
// Check the provided animalName and return the corresponding animal's description
// Checking if the animal is 'Jungle

      // Check if the animal is 'Jungle
      if(animalName == 'jungle')
      {
      // Return the description of the Jungle
        return new Animal().getDescription();
      }
      // Check if the animal is 'panda'
      if(animalName == 'panda')
      {
        // Return the description of the Panda
        return new Panda().getDescription();
      }
      // Check if the animal is 'lion'
      else if (animalName == 'lion')
      {
        // Return the description of the Lion
        return new Lion().getDescription();
      }
      // Check if the animal is 'tiger'
      else if (animalName == 'tiger')
      {
        // Return the description of the Tiger
        return new Tiger().getDescription();
      }
      // Check if the animal is 'chimpanzee'
      else if (animalName == 'chimpanzee')
      {
        // Return the description of the Chimpanzee
        return new Chimpanzee().getDescription();
      }
      // Check if the animal is 'elephant'
      else if (animalName == 'elephant')
      {
        // Return the description of the Elephant
        return new Elephant().getDescription();
      }
      // Check if the animal is 'penguin'
      else if (animalName == 'penguin')
      {
        // Return the description of the Penguin
        return new Penguin().getDescription();
      }
}
// Check the provided animalName and return the corresponding animal sound
function animalSoundFinder(animalName)
{
       // Check if the animal is 'Jungle'
      if(animalName == 'jungle')
      {
        // return the sound of the 'jungle'
        return new Animal().getSound();
      }
       // Check if the animal is 'panda'
      if(animalName == 'panda')
      {
        // return the sound of the 'panda'
        return new Panda().getSound();
      }
       // Check if the animal is 'lion'
      else if (animalName == 'lion')
      {
        // return the sound of the 'lion'
        return new Lion().getSound();
      }
       // Check if the animal is 'tiger'
      else if (animalName == 'tiger')
      {
        //return the sound of the 'tiger'
        return new Tiger().getSound();
      }
       // Check if the animal is 'chimpanzee'
      else if (animalName == 'chimpanzee')
      {
        // return the sound of the 'chimpanzee'
        return new Chimpanzee().getSound();
      }
       // Check if the animal is 'elephant'
      else if (animalName == 'elephant')
      {
        // return the sound of the 'elephant'
        return new Elephant().getSound();
      }
       // Check if the animal is 'penguin'
      else if (animalName == 'penguin')
      {
        // return the sound of the 'penguin'
        return new Penguin().getSound();
      }
 }

// Check the provided animalName and return the corresponding animal image
function animalImageFinder(animalName)
{
      // Check if the animal is 'penguin'
      if(animalName == 'jungle')
      {
        // return the image of the 'jungle'
        return new Animal().getImage();
      }
      // Check if the animal is 'panda'
      if(animalName == 'panda')
      {
        // return the image of the 'panda'
        return new Panda().getImage();
      }
      // Check if the animal is 'lion'
      else if (animalName == 'lion')
      {
        // return the image of the 'lion'
        return new Lion().getImage();
      }
      // Check if the animal is 'tiger'
      else if (animalName == 'tiger')
      {
        // return the image of the 'tiger'
        return new Tiger().getImage();
      }
      // Check if the animal is 'Chimpanzee'
      else if (animalName == 'chimpanzee')
      {
        // return the image of the 'Chimpanzee'
        return new Chimpanzee().getImage();
      }
      // Check if the animal is 'elephant'
      else if (animalName == 'elephant')
      {
        // return the image of the 'elephant'
        return new Elephant().getImage();
      }
      // Check if the animal is 'penguin'
      else if (animalName == 'penguin')
      {
        // return the image of the 'penguin'
        return new Penguin().getImage();
      }
}