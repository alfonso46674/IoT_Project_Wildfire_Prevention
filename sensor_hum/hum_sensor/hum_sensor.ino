// Example testing sketch for various DHT humidity/temperature sensors

#include "DHT.h"
#define DHTPIN 2 // what digital pin we're connected to
// Uncomment whatever type you're using!
//#define DHTTYPE DHT11 // DHT 11
#define DHTTYPE DHT11 // DHT 11 (AM2302), AM2321
// Connect pin 1 (on the left) of the sensor to +5V
// NOTE: If using a board with 3.3V logic like an Arduino Due connect pin 1
// to 3.3V instead of 5V!
// Connect pin 2 of the sensor to whatever your DHTPIN is
// Connect pin 4 (on the right) of the sensor to GROUND
// Connect a 10K resistor from pin 2 (data) to pin 1 (power) of the sensor
// Initialize DHT sensor.
// Note that older versions of this library took an optional third parameter to
// tweak the timings for faster processors. This parameter is no longer needed
// as the current DHT reading algorithm adjusts itself to work on faster procs.
DHT dht(DHTPIN, DHTTYPE);

void setup() {
   Serial.begin(9600);
   Serial.println("DHT11 test!");
   dht.begin();
}

void loop() {
   delay(2000); // Wait a few seconds between measurements
   float h = dht.readHumidity();
   // Check if any reads failed and exit early (to try again).
   if (isnan(h)) {
      Serial.println("Failed to read from DHT sensor!");
      return;
   }
   Serial.print ("Humidity (%): ");
   Serial.print (h);
   Serial.print("\n");
}
