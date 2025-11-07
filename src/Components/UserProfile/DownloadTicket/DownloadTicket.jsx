import React, { useState, useEffect } from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import QRCode from "qrcode";

// Sample user and ticket info
const user = {
  name: "Abir Rubaiyat",
  email: "abirr@gmail.com",
};

const ticket = {
  event: "Rock Night Festival 2025",
  date: "Nov 10, 2025",
  time: "7:00 PM",
  seat: "A12",
  venue: "City Arena, Dhaka",
  image:
    "https://i.pinimg.com/564x/1d/5e/7c/1d5e7c6d3d0a6e6f33d91aee29eb3f6f.jpg", // concert image
};

// Styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#1a1a1a",
    padding: 0,
  },
  ticketContainer: {
    width: "100%",
    height: 250,
    flexDirection: "row",
    borderRadius: 12,
    overflow: "hidden",
  },
  leftSide: {
    width: "40%",
    backgroundColor: "#9b59b6", // solid color instead of gradient
    padding: 15,
    justifyContent: "center",
  },
  rightSide: {
    width: "60%",
    padding: 15,
    justifyContent: "space-between",
    backgroundColor: "#2c2c2c",
    position: "relative",
  },
  leftTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  leftSubtitle: {
    fontSize: 12,
    color: "#fff",
  },
  text: {
    fontSize: 11,
    color: "#fff",
    marginBottom: 2,
  },
  qrContainer: {
    width: 70,
    height: 70,
    marginTop: 10,
  },
  barcode: {
    width: "100%",
    height: 20,
    backgroundColor: "#fff",
    marginTop: 8,
  },
  social: {
    fontSize: 10,
    color: "#fff",
    marginTop: 4,
  },
  concertImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    right: 0,
    top: 0,
    opacity: 0.2,
  },
});

const TicketDocument = ({ qrDataUrl }) => (
  <Document>
    <Page size={[600, 250]} style={styles.page}>
      <View style={styles.ticketContainer}>
        {/* Left Side */}
        <View style={styles.leftSide}>
          <Text style={styles.leftTitle}>MUSIC CONCERT TICKETS</Text>
          <Text style={styles.leftSubtitle}>BRING YOUR VALID ID CARD.</Text>
        </View>

        {/* Right Side */}
        <View style={styles.rightSide}>
          <Image src={ticket.image} style={styles.concertImage} />
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Name: </Text>
            {user.name}
          </Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Email: </Text>
            {user.email}
          </Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Event: </Text>
            {ticket.event}
          </Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Date: </Text>
            {ticket.date}
          </Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Time: </Text>
            {ticket.time}
          </Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Seat: </Text>
            {ticket.seat}
          </Text>

          {/* QR Code */}
          {qrDataUrl && <Image src={qrDataUrl} style={styles.qrContainer} />}

          <View style={styles.barcode}></View>
          <Text style={styles.social}>@Music_Event</Text>
        </View>
      </View>
    </Page>
  </Document>
);

const DownloadTicket = () => {
  const [qrDataUrl, setQrDataUrl] = useState("");

  useEffect(() => {
    const generateQR = async () => {
      const url = await QRCode.toDataURL(
        `${ticket.event}-${user.email}-${ticket.seat}`
      );
      setQrDataUrl(url);
    };
    generateQR();
  }, []);

  return (
    <div className="p-8 bg-base-200 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Your Ticket</h1>

      <div className="ticket-preview flex bg-gray-800 text-white p-4 rounded-lg">
        {/* Left side */}
        <div className="w-2/5 bg-purple-600 p-4 flex flex-col justify-center">
          <h2 className="font-bold text-lg">MUSIC CONCERT TICKETS</h2>
          <p className="text-sm">BRING YOUR VALID ID CARD.</p>
        </div>

        {/* Right side */}
        <div className="w-3/5 p-4 relative">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Event:</strong> {ticket.event}
          </p>
          <p>
            <strong>Date:</strong> {ticket.date}
          </p>
          <p>
            <strong>Time:</strong> {ticket.time}
          </p>
          <p>
            <strong>Seat:</strong> {ticket.seat}
          </p>

          {/* QR code */}
          {qrDataUrl && (
            <img src={qrDataUrl} alt="QR Code" width={70} height={70} />
          )}
        </div>
      </div>

      <PDFDownloadLink
        document={<TicketDocument qrDataUrl={qrDataUrl} />}
        fileName="Concert_Ticket.pdf"
        className="btn btn-primary"
      >
        {({ loading }) =>
          loading ? "Preparing PDF..." : "Download Ticket PDF"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default DownloadTicket;
