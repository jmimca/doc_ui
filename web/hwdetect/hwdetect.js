const KEYWORDS_ID = {
    "terminator": new Uint8Array([
        0xE1, 0x61, 0xCD, 0x12, 0xAD, 0x76, 0x70, 0x75, 0x86, 0x14, 0xA0, 0x46, 0xD2, 0x75, 0x50, 0x6B,
        0xF0, 0x92, 0x0E, 0xAB, 0x38, 0xB7, 0xC1, 0x27, 0x2F, 0x8C, 0x63, 0x7F, 0x39, 0xAE, 0x93, 0x22,
        0xD4, 0x84, 0xFF, 0x18, 0xDE, 0xD2, 0x44, 0x6F, 0xE8, 0x5B, 0x32, 0xA9, 0xB6, 0x59, 0xFC, 0x70,
        0x18, 0x39, 0x43, 0xB8, 0x8F, 0xE1, 0x51, 0x58, 0xF6, 0x49, 0x22, 0x28, 0xE6, 0xAB, 0xF8, 0x21,
        0xCD, 0xC2, 0x3B, 0xD3, 0xD5, 0xE1, 0xF2, 0x2F, 0xB7, 0xB4, 0x0D, 0xE5, 0x6C, 0xCE, 0xDB, 0xDB,
        0xDB, 0x92, 0x13, 0x97, 0xD0, 0x04, 0xE2, 0xA2, 0x17, 0x0B, 0xD9, 0x31, 0x37, 0x80, 0x61, 0x4E,
        0xE9, 0x66, 0x53, 0x7E, 0x06, 0x9C, 0xC6, 0x9B, 0xF8, 0xD1, 0x5A, 0xAE, 0xD1, 0xCC, 0x15, 0xB4,
        0x49, 0x45, 0x41, 0x9E, 0x1B, 0xC9, 0xF2, 0x94, 0xCF, 0x5A, 0x99, 0xF4, 0x12, 0xB8, 0xD8, 0xCC,
        0x62, 0x6B, 0xE8, 0xF0, 0x3E, 0xDE, 0xCB, 0x98, 0x84, 0x15, 0x63, 0x3F, 0xCB, 0x05, 0x09, 0x8B,
        0x8C, 0xFB, 0xD7, 0x65, 0x3C, 0x1E, 0xA6, 0x15, 0x9B, 0xDC, 0x43, 0x70, 0x35, 0x33, 0x3B, 0x50,
        0xE0, 0xF8, 0xD1, 0xC7, 0xF0, 0x84, 0x4C, 0xAA, 0x38, 0x14, 0xFB, 0xB3, 0x13, 0x29, 0xDD, 0xBE,
        0x41, 0x14, 0xE2, 0xB4, 0x2A, 0xA3, 0xFE, 0x44, 0x4F, 0x9F, 0x60, 0x5C, 0x49, 0x8F, 0xF3, 0x89,
        0x34, 0x10, 0x95, 0x01, 0xAE, 0x9D, 0xE6, 0xE6, 0x2B, 0x09, 0x5C, 0x47, 0xB8, 0x6F, 0xAE, 0xF6,
        0x65, 0xAC, 0xC8, 0xF6, 0x42, 0x14, 0xB7, 0xDD, 0x75, 0xD7, 0x5D, 0x31, 0x1A, 0x96, 0xA6, 0x80,
        0x50, 0xE2, 0x76, 0x61, 0x17, 0xEC, 0xBB, 0x2A, 0x97, 0x08, 0xA3, 0xC1, 0x50, 0xF9, 0x9C, 0xF4,
        0x15, 0x0E, 0x19, 0xD4, 0xA3, 0x84, 0xFF, 0xB8, 0xEE, 0xAC, 0x87, 0x84, 0xDA, 0x08, 0x0E, 0x82,
        0x61, 0x56, 0x10, 0x91, 0x9D, 0x21, 0xD3, 0xB6, 0x02, 0x05, 0xDE, 0x93, 0x13, 0x67, 0x38, 0x01,
        0xB8, 0x98, 0xB4, 0xA4, 0x46, 0x7A, 0x0D, 0xA0, 0x16, 0xF3, 0xD0, 0x2B, 0x48, 0x83, 0x2C, 0xD4,
        0x3A, 0xFB, 0x26, 0x7C, 0x10, 0x6C, 0x80, 0x0D, 0xE9, 0xEF, 0x9F, 0x7F, 0x07, 0xA9, 0xF5, 0xB0,
        0x67, 0xF2, 0x10, 0x2D, 0x81, 0x62, 0xD4, 0x34, 0x08, 0x51, 0x8E, 0x75, 0x63, 0x75, 0x4E, 0x5B,
        0x8A, 0xA5, 0xDA, 0x09, 0xDF, 0x1E, 0xFD, 0x71, 0x2B, 0x5B, 0x65, 0xBB, 0x56, 0xDC, 0xB7, 0x85,
        0x5E, 0x7B, 0xB5, 0x08, 0xAA, 0xBF, 0xC3, 0xB1, 0x8E, 0x9A, 0x35, 0x18, 0xC3, 0xA0, 0x6B, 0x74,
        0x50, 0xE9, 0x3E, 0x96, 0xBE, 0x35, 0xB1, 0x4F, 0x3F, 0xB6, 0x34, 0xBC, 0x10, 0x5C, 0xC7, 0xCF,
        0xE9, 0xA9, 0x84, 0x8C, 0xB3, 0x39, 0x2C, 0xDA, 0xC6, 0x6D, 0x7B, 0x50, 0xCE, 0xFA, 0xE8, 0x91,
        0xA2, 0x38, 0x4C, 0x2A, 0x40, 0x8F, 0x62, 0x6D, 0x66, 0x5E, 0x78, 0x21, 0x99, 0xFE, 0x31, 0xA4,
        0x13, 0xF7, 0xC6, 0x37, 0x97, 0xC2, 0x23, 0x5A, 0x5B, 0xE2, 0x55, 0xA4, 0x68, 0x53, 0x30, 0xF5,
        0x3B, 0xF3, 0x7F, 0xE0, 0x9F, 0xE1, 0xB7, 0x6E, 0xCC, 0x0B, 0x98, 0x1F, 0x1D, 0x3F, 0xEC, 0xF8,
        0x7C, 0xA1, 0xD4, 0xF8, 0xA7, 0x86, 0x5B, 0xDD, 0xAA, 0xC2, 0xA0, 0x96, 0xA0, 0x80, 0xA2, 0xC0,
        0xDA, 0x0B, 0x6A, 0x1B, 0xC0, 0xF3, 0xF1, 0x88, 0xA9, 0xA6, 0x8F, 0xC5, 0x62, 0xC2, 0x12, 0x31,
        0x0C, 0x20, 0xFD, 0x26, 0xFA, 0x20, 0x4C, 0x67, 0x4D, 0xDE, 0x79, 0x8D, 0x6D, 0x11, 0x97, 0x8D,
        0x7A, 0x0B, 0x15, 0x05, 0xDE, 0x2A, 0xFC, 0xF7, 0xB8, 0x57, 0x87, 0xD1, 0x8D, 0xF3, 0x3C, 0xA7,
        0x31, 0x46, 0x5D, 0xE7, 0x6D, 0xE6, 0xE5, 0x37, 0x91, 0xDF, 0x88, 0x59, 0xC9, 0x26, 0xE3, 0x11,
        0x69, 0xB6, 0x00, 0x0D, 0x79, 0x52, 0x48, 0x5C, 0xB4, 0x91, 0xBF, 0xF5, 0x5C, 0xD0, 0x41, 0x39,
        0x56, 0x27, 0xBB, 0x6E, 0xD4, 0x38, 0x01, 0x89, 0x52, 0x5E, 0x0A, 0x90, 0x09, 0x39, 0x8B, 0x35,
        0x04, 0xB4, 0x21, 0x20, 0x61, 0x16, 0xCE, 0x80, 0x99, 0xC4, 0xBC, 0x6D, 0xB0, 0x79, 0x5C, 0x1B,
        0x38, 0x26, 0x42, 0x17, 0x98, 0xA8, 0x92, 0x52, 0xE8, 0xC5, 0xB5, 0x21, 0xB9, 0xE4, 0x04, 0x12,
        0xDB, 0x7F, 0x72, 0x4C, 0xBC, 0x79, 0x24, 0x83, 0xD2, 0xD5, 0xBF, 0x9F, 0x08, 0x26, 0x77, 0xD8,
        0x51, 0x87, 0x14, 0x15, 0x4F, 0x03, 0x28, 0x67, 0x92, 0xCB, 0x6D, 0xCC, 0x16, 0x3F, 0xE6, 0xD0,
        0xEE, 0x08, 0x25, 0x84, 0xE8, 0xEA, 0x9B, 0x6E, 0x71, 0x92, 0x47, 0x20, 0x62, 0x33, 0xA0, 0xC5,
        0x76, 0xEC, 0x62, 0x04, 0x23, 0x70, 0xEA, 0xF0, 0x2E, 0x34, 0x4D, 0x2E, 0x38, 0x7E, 0x35, 0x20,
        0x29, 0x10, 0xA2, 0xB2, 0x23, 0x05, 0x92, 0xAE, 0x39, 0xB9, 0xE6, 0x02, 0xCB, 0x86, 0x4C, 0x68,
        0x07, 0x57, 0x60, 0xC9, 0x3A, 0xF1, 0x3D, 0x7B, 0xA1, 0x0F, 0xEC, 0x86, 0x47, 0x1A, 0xE6, 0xAC,
        0x1D, 0x56, 0xA7, 0x5C, 0xB6, 0x9E, 0xD4, 0x10, 0x58, 0x09, 0x54, 0x2C, 0xED, 0x4E, 0x94, 0xE2,
        0xDF, 0x45, 0x39, 0x32, 0x19, 0x41, 0x2D, 0x2E, 0x5F, 0x4E, 0x18, 0x05, 0x0C, 0xA4, 0x66, 0x05,
        0xD1, 0x26, 0x89, 0x67, 0xCB, 0xAF, 0xAC, 0xA0, 0x22, 0x1F, 0xDC, 0xDC, 0xF8, 0x91, 0xD7, 0x36,
        0xBB, 0xA8, 0x3C, 0x07, 0x1E, 0x29, 0x02, 0x3E, 0xB2, 0x23, 0x15, 0xFF, 0xF9, 0x59, 0x8E, 0x26,
        0x9A, 0x0F, 0xEF, 0x6B, 0xD3, 0x54, 0x52, 0x16, 0x9E, 0x1B, 0xA4, 0x50, 0x79, 0x4B, 0x52, 0x3C,
        0x3E, 0xBF, 0x00, 0x93, 0xC9, 0x61, 0x15, 0x1A, 0xFD, 0x98, 0x61, 0xC7, 0x7E, 0x90, 0x3D, 0x00,
        0xBE, 0xE3, 0xDB, 0x09, 0xEF, 0xBA, 0xF8, 0x49, 0xAC, 0x16, 0xD1, 0x0E, 0x44, 0x7E, 0x87, 0xC2,
        0x43, 0x8F, 0xDB, 0xAA, 0x24, 0x12, 0x4C, 0xA9, 0x46, 0x3D, 0x27, 0xDA, 0x55, 0x48, 0x89, 0x22,
        0x7D, 0x31, 0xCD, 0xA6, 0x82, 0xC6, 0x66, 0xD9, 0xA3, 0x2E, 0xC3, 0x26, 0x3A, 0xE2, 0x23, 0x7F,
        0x2D, 0x0E, 0xBA, 0x84, 0x8D, 0xA5, 0xDE, 0x08, 0x23, 0x23, 0x41, 0xF9, 0xB1, 0xF4, 0xFC, 0x2F,
        0x90, 0x53, 0x09, 0xAF, 0x88, 0xC7, 0xFD, 0x53, 0x7B, 0x0B, 0x9D, 0xE9, 0xFA, 0xF2, 0xA5, 0xDA,
        0x7C, 0x61, 0xC8, 0xDC, 0x62, 0x96, 0x9C, 0x9B, 0x1B, 0xF6, 0xC9, 0x48, 0x04, 0x0A, 0xF9, 0x24,
        0x10, 0xF0, 0x07, 0x00, 0x54, 0xF0, 0xE3, 0x58, 0x94, 0xC5, 0x86, 0x4F, 0xC7, 0x3E, 0x8D, 0xCE,
        0x60, 0x2F, 0xB4, 0x3F, 0x1B, 0x4A, 0x2C, 0x08, 0x8F, 0x85, 0x6B, 0x19, 0xA5, 0x08, 0xE3, 0xD0,
        0x13, 0x78, 0x34, 0x3E, 0x3B, 0xBF, 0x17, 0x43, 0x40, 0x76, 0x3D, 0x89, 0xB6, 0x67, 0x15, 0xC0,
        0x42, 0x1B, 0xEA, 0x5F, 0x13, 0x23, 0x7E, 0x5E, 0x33, 0x8C, 0xA9, 0x7E, 0x75, 0xC1, 0x2C, 0x57,
        0x93, 0x1F, 0xCC, 0xB0, 0x29, 0x82, 0xE1, 0xAC, 0x1C, 0xE7, 0xCF, 0xC7, 0x57, 0xA9, 0x9F, 0x48,
        0xD5, 0xAE, 0x2B, 0x1F, 0xB2, 0xFC, 0x48, 0xA8, 0x58, 0x50, 0x55, 0x67, 0x79, 0x5B, 0x8B, 0x87,
        0x34, 0xAE, 0xF8, 0x78, 0x21, 0x55, 0x4D, 0x2E, 0x7F, 0x87, 0x76, 0x74, 0x98, 0x75, 0xC9, 0x5E,
        0x8C, 0xE1, 0x12, 0x2F, 0x80, 0x5C, 0xC8, 0x4B, 0xE7, 0xF6, 0x55, 0x9A, 0xF1, 0x1C, 0x2C, 0x68,
        0xD7, 0x8A, 0x28, 0x79, 0x94, 0x70, 0x68, 0x75, 0xD4, 0x29, 0x69, 0x70, 0x1B, 0xA1, 0x7B, 0xC6,
        0xE8, 0x41, 0xF7, 0x03, 0x79, 0x49, 0xE6, 0x79, 0x78, 0x83, 0x99, 0x89, 0xDF, 0x96, 0x2F, 0x15,
        0x57, 0x73, 0x54, 0xCF, 0xF0, 0x84, 0xFE, 0x2E, 0xCB, 0x25, 0xAC, 0x36, 0x4D, 0xDB, 0xE9, 0xF2,
        0x3D, 0x81, 0xE9, 0xE2, 0x50, 0x51, 0xFA, 0x3F, 0xBF, 0x89, 0x40, 0x37, 0xE9, 0x6A, 0x5F, 0x12,
        0xB3, 0xC2, 0x6B, 0x81, 0x3B, 0xF1, 0x65, 0xDE, 0xFC, 0xF2, 0x6D, 0x79, 0xF3, 0xE9, 0x49, 0x0B,
        0x8B, 0x0C, 0x99, 0xA0, 0xFA, 0xAF, 0xFF, 0x0A, 0xC9, 0xB0, 0x83, 0xA7, 0x38, 0xC3, 0x22, 0xBA,
        0x14, 0x7F, 0x5A, 0x82, 0xB0, 0x61, 0xB5, 0xBD, 0xE5, 0x01, 0x8D, 0x93, 0xFB, 0x1C, 0x25, 0x94,
        0x22, 0x3D, 0xA1, 0x03, 0x93, 0x24, 0xDE, 0x46, 0x6A, 0xD2, 0xB2, 0xBF, 0xC7, 0xA2, 0x7B, 0x27,
        0xA1, 0xBD, 0xB5, 0x45, 0x07, 0xDC, 0x32, 0xBB, 0x57, 0x1A, 0xFF, 0x74, 0x65, 0x3B, 0x93, 0x1A,
        0x42, 0xF8, 0xB1, 0x8E, 0x73, 0x0C, 0x8B, 0x89, 0xE2, 0x49, 0xEF, 0xEC, 0xBD, 0x10, 0x30, 0x84,
        0x11, 0xB2, 0xCF, 0x12, 0x83, 0xC0, 0x43, 0xC3, 0x4B, 0x71, 0x24, 0xBE, 0x1B, 0x06, 0x79, 0x97,
        0xF4, 0x59, 0x08, 0x6B, 0x6B, 0xDF, 0x0F, 0xCD, 0x07, 0x20, 0xB1, 0xF4, 0x50, 0x8D, 0xC6, 0x1F,
        0x36, 0xD3, 0x5E, 0xCD, 0xFD, 0x76, 0xAA, 0x50, 0xD6, 0x23, 0xA2, 0x43, 0xF2, 0xE2, 0x82, 0x9F,
        0x01, 0xFB, 0x91, 0xF4, 0xA7, 0xE1, 0xDE, 0x7F, 0x44, 0x8E, 0xB3, 0xE5, 0x26, 0x5C, 0x26, 0x17,
        0x4B, 0x24, 0x61, 0x76, 0x6D, 0x7B, 0x77, 0xC9, 0xF4, 0x67, 0x4A, 0x78, 0xB0, 0x0D, 0x3F, 0xED,
        0x8C, 0x4B, 0xC0, 0x04, 0xC0, 0x57, 0xEC, 0x9A, 0x1F, 0x43, 0x86, 0xAA, 0xBF, 0xDD, 0x02, 0x4D,
        0xAA, 0xDE, 0xB1, 0x2C, 0x30, 0x3D, 0x5A, 0xE5, 0x8D, 0xB6, 0x10, 0x36, 0x26, 0x5F, 0xCE, 0xCE,
        0x85, 0x7C, 0xA6, 0x92, 0x8F, 0x4F, 0x49, 0x88, 0xF6, 0xBB, 0xC5, 0x69, 0x6E, 0x9C, 0xBA, 0x27,
        0x55, 0x7D, 0x6B, 0x49, 0xDE, 0xB0, 0xE2, 0x4A, 0x48, 0x9C, 0xA6, 0xC6, 0x8A, 0x09, 0x87, 0xF4,
        0xF1, 0x65, 0xA0, 0x8B, 0x2D, 0xFA, 0x06, 0xFA, 0xD8, 0xF9, 0x60, 0xF2, 0xA8, 0xD1, 0x09, 0x0F,
        0xC5, 0x27, 0x57, 0xB9, 0x4F, 0xFD, 0xEF, 0x54, 0x37, 0x4A, 0x76, 0x13, 0x22, 0x38, 0xC9, 0x35,
        0x1D, 0x71, 0xF1, 0x8B, 0x10, 0x82, 0x73, 0x75, 0xE0, 0xFD, 0x65, 0x70, 0x02, 0xC5, 0x5B, 0xF5,
        0xC3, 0x3E, 0xA7, 0x77, 0xBC, 0x4A, 0xED, 0x83, 0xD6, 0xC8, 0xD7, 0x19, 0xFC, 0xC2, 0x4C, 0xE5,
        0xCD, 0x60, 0x0B, 0x39, 0xA4, 0x81, 0x8F, 0x0E, 0xEC, 0x0A, 0x04, 0x3E, 0x51, 0x70, 0x2F, 0xE8,
        0xCC, 0xBE, 0x5C, 0xC9, 0x99, 0x4B, 0x72, 0x03, 0x27, 0x7A, 0x55, 0xBF, 0x0A, 0x38, 0x07, 0xEB,
        0x99, 0x0B, 0x52, 0xA0, 0x54, 0x75, 0x1F, 0x6D, 0x6C, 0x3B, 0x83, 0x96, 0xC8, 0xCA, 0xB7, 0x31,
        0xB6, 0x1C, 0xAD, 0x38, 0xCB, 0x66, 0xCE, 0x69, 0x5B, 0xF6, 0x27, 0x41, 0x57, 0x1C, 0x0C, 0x8C,
        0x3F, 0xBF, 0xDB, 0x6A, 0xEA, 0x81, 0xB6, 0x16, 0xE0, 0x05, 0x5C, 0xC6, 0xFA, 0x50, 0x4C, 0x8A,
        0x8E, 0xEC, 0xAD, 0xFA, 0x4A, 0xF0, 0x30, 0xB8, 0x7B, 0x1F, 0xCA, 0x6F, 0x75, 0x78, 0xEE, 0x7D,
        0x59, 0x6C, 0xC8, 0x44, 0x55, 0x9D, 0x09, 0x92, 0xB5, 0x77, 0xBA, 0x16, 0xAC, 0x5F, 0x5A, 0xE0,
        0x03, 0xE2, 0xE8, 0xA1, 0x3D, 0x53, 0x34, 0x86, 0x03, 0x2E, 0x47, 0x0D, 0xB3, 0x55, 0xDA, 0x93,
        0x83, 0x19, 0xC1, 0x81, 0x02, 0x33, 0xA0, 0x15, 0xDF, 0x13, 0xC1, 0x80, 0xF2, 0x8E, 0xBB, 0xC7,
        0xEA, 0x76, 0xCD, 0xFA, 0x00, 0xAD, 0x65, 0x35, 0x31, 0x6F, 0x00, 0xAA, 0x91, 0x07, 0x5D, 0xE2,
        0x55, 0x8C, 0xD5, 0x19, 0x02, 0x31, 0xE0, 0x71, 0x78, 0x04, 0x0F, 0x66, 0x1A, 0x8D, 0x77, 0x0D,
        0xAF, 0x2D, 0xA9, 0x8D, 0x71, 0xEC, 0x97, 0xED, 0xD2, 0xF0, 0x7C, 0xC3, 0xF7, 0x45, 0x50, 0x55,
        0x44, 0x6E, 0xFB, 0x76, 0x94, 0xA0, 0xD5, 0x5B, 0xC1, 0xD0, 0xD7, 0xFF, 0x65, 0xC0, 0x5E, 0x41,
        0xED, 0x6D, 0x61, 0xD5, 0xD9, 0x38, 0xE2, 0xB4, 0xFB, 0x3C, 0xD5, 0x71, 0x85, 0x4E, 0x21, 0x8C,
        0xC0, 0x12, 0x55, 0x38, 0x25, 0x0F, 0x16, 0x4B, 0x28, 0xC5, 0x13, 0xA2, 0xAA, 0xA3, 0xF0, 0xEA,
        0x5A, 0x13, 0x4F, 0x8E, 0x52, 0x73, 0x9A, 0xAA, 0x6E, 0x46, 0x3A, 0xE9, 0x1E, 0xC1, 0x89, 0x64,
        0xF9, 0x5C, 0xE4, 0xB2, 0xFC, 0x2B, 0xD2, 0x7F, 0x72, 0x6F, 0x42, 0x7D, 0x59, 0xB1, 0xE4, 0x93,
        0x70, 0x40, 0xF2, 0xCC, 0x43, 0xDE, 0xE2, 0xEF, 0x32, 0x0C, 0x2F, 0x4A, 0x99, 0x79, 0xD0, 0x45,
        0x80, 0xAB, 0xEC, 0x9A, 0x89, 0x4D, 0x4E, 0x90, 0x69, 0x91, 0x3B, 0xBF, 0x21, 0x73, 0x95, 0x7B,
        0xFF, 0x1C, 0xA1, 0x68, 0xE7, 0x4D, 0xA3, 0xEA, 0x32, 0xC7, 0xFB, 0x54, 0x2D, 0x0C, 0x19, 0x85,
        0x38, 0xEA, 0x50, 0x4A, 0x44, 0x32, 0x3C, 0xA7, 0x86, 0x97, 0x94, 0x4E, 0x1A, 0x32, 0xE5, 0xFA,
        0x25, 0xC5, 0xE7, 0x21, 0x81, 0x9E, 0x4A, 0xE5, 0x94, 0x09, 0xFF, 0xB5, 0xBC, 0xD9, 0xA1, 0x28,
        0x74, 0x97, 0xA4, 0x2F, 0x52, 0x3B, 0x96, 0xDC, 0x9A, 0x7A, 0x51, 0xF6, 0x09, 0x7D, 0x32, 0x92,
        0x35, 0xED, 0xB3, 0x44, 0xC0, 0x1D, 0xF5, 0xD2, 0x92, 0xC4, 0xFB, 0xA7, 0xE2, 0xD3, 0xC8, 0x37,
        0x28, 0x36, 0x93, 0xA5, 0xB2, 0x04, 0x6D, 0x1D, 0x89, 0xB1, 0xE0, 0xB5, 0x56, 0x57, 0x43, 0xA8,
        0xD7, 0x96, 0x2C, 0x1A, 0x0A, 0x2C, 0xE1, 0xED, 0x39, 0xFE, 0xFF, 0xA8, 0x34, 0x05, 0xAC, 0x23,
        0x0D, 0xFB, 0xF8, 0xC1, 0x7E, 0x68, 0x09, 0x4B, 0x27, 0x5B, 0x6F, 0xCE, 0x6A, 0xB3, 0xED, 0x1A,
        0xC3, 0x11, 0xDE, 0x46, 0xF0, 0xBD, 0x25, 0xE6, 0x9E, 0xA9, 0x50, 0xAD, 0x97, 0xFF, 0xE9, 0xBE,
        0x27, 0xD2, 0xFE, 0x52, 0x8D, 0xEB, 0xBF, 0xA7, 0x42, 0x98, 0x1B, 0x02, 0x71, 0xED, 0x39, 0x3C,
        0xE4, 0x6A, 0x46, 0xFC, 0xF0, 0xC7, 0x9F, 0x02, 0x77, 0x7B, 0xEF, 0x47, 0x58, 0x97, 0xC8, 0x15,
        0xE7, 0xBB, 0x5C, 0x69, 0xAC, 0x52, 0x02, 0x0A, 0xB3, 0x17, 0x9E, 0x8C, 0x21, 0x05, 0x81, 0x6E,
        0xD4, 0xA2, 0x64, 0x87, 0xD8, 0x2F, 0x0F, 0xE1, 0x4D, 0xAD, 0x06, 0x3C, 0xC9, 0xFC, 0xED, 0xB9,
        0xE8, 0x77, 0xED, 0x9A, 0x66, 0xE0, 0x24, 0x11, 0x3B, 0xE5, 0x07, 0x20, 0xB2, 0xFF, 0x9B, 0xF1,
        0x2B, 0xCE, 0x5E, 0x65, 0xC1, 0x6B, 0x54, 0x5E, 0x40, 0xFE, 0x93, 0xD8, 0x67, 0x34, 0x4D, 0xD5,
        0x7C, 0x00, 0xC4, 0x0E, 0x09, 0x69, 0x07, 0x28, 0xDA, 0x82, 0xC9, 0x95, 0x0C, 0xCC, 0x86, 0x65,
        0xD9, 0x01, 0xBF, 0xA0, 0xC9, 0x69, 0x1D, 0x7C, 0x12, 0x08, 0x86, 0x91, 0xB7, 0xD3, 0x62, 0xF7,
        0xF3, 0xF9, 0xBD, 0x3E, 0xF2, 0x04, 0xE4, 0x5F, 0x71, 0xFF, 0xC3, 0xC0, 0x98, 0x46, 0xEF, 0x59,
        0x76, 0x7B, 0x36, 0x39, 0x13, 0xB1, 0xD8, 0x6A, 0x65, 0xC7, 0xFF, 0xF1, 0xB8, 0x35, 0x06, 0x12,
        0x53, 0x35, 0x10, 0xEF, 0xC2, 0xB6, 0x29, 0xDC, 0x71, 0xD4, 0x24, 0xCE, 0x42, 0x18, 0xFC, 0x9E,
        0xB0, 0xE7, 0x2C, 0x50, 0x58, 0xD5, 0x56, 0x91, 0x7C, 0x49, 0xC7, 0x11, 0xF5, 0x8F, 0xC9, 0x3C,
        0xB2, 0xF8, 0xA1, 0xE1, 0x49, 0xC8, 0xD2, 0xC7, 0xF6, 0xE8, 0x6F, 0xB2, 0x29, 0xBF, 0xDA, 0x56,
        0x64, 0xE4, 0x44, 0xC4, 0x3B, 0x10, 0x9B, 0xE5, 0xFF, 0x35, 0x49, 0x01, 0xAA, 0x8C, 0x1E, 0xBA,
        0x3C, 0xA8, 0xD0, 0xD9, 0xBA, 0xCB, 0x84, 0x30, 0x1F, 0x2C, 0x09, 0x43, 0xD9, 0x3E, 0x6E, 0x18,
        0x79, 0x23, 0x9D, 0x93, 0xF9, 0x22, 0xF9, 0xE7, 0xF2, 0xFE, 0x5B, 0x1E, 0x96, 0x7F, 0x60, 0x0E,
        0xFA, 0x45, 0xAE, 0x3B, 0x85, 0x95, 0x3E, 0x24, 0xF8, 0xA5, 0x39, 0x5C, 0x93, 0x02, 0x3C, 0x11,
        0xEB, 0x18, 0x20, 0xD5, 0x0E, 0x5D, 0x09, 0xE2, 0xD7, 0x13, 0xAD, 0xBF, 0xE7, 0x5B, 0x34, 0x2A,
        0x37, 0x66, 0x31, 0x09, 0xA6, 0x12, 0xC0, 0xEA, 0x56, 0x8E, 0x47, 0x15, 0x36, 0x14, 0x0B, 0xEE,
        0x22, 0xDD, 0xCB, 0xCE, 0x3D, 0x64, 0xA4, 0x43, 0xEB, 0xBD, 0x69, 0xD1, 0x69, 0xCD, 0xE0, 0xB0,
        0x35, 0xF7, 0x50, 0xBE, 0x5F, 0x84, 0x91, 0xB6, 0xE8, 0x6E, 0x83, 0x19, 0x3A, 0x2A, 0xEB, 0x3B,
        0x66, 0x35, 0x33, 0xAE, 0xAD, 0x42, 0x2C, 0x2E, 0x24, 0x5F, 0xA0, 0xA9, 0x97, 0xE9, 0x3C, 0xF4,
        0xBF, 0x63, 0x1C, 0x3C, 0x24, 0xEE, 0x2C, 0x53, 0x3D, 0xC6, 0x33, 0x42, 0x03, 0x9F, 0x08, 0x43,
        0x66, 0x67, 0xBA, 0x36, 0x6C, 0xC0, 0x9D, 0x0A, 0x71, 0xD4, 0xBE, 0x8F, 0xDC, 0x20, 0xF1, 0xA5,
        0x89, 0x17, 0x47, 0x55, 0xB1, 0xE3, 0xF0, 0x34, 0xAA, 0xF2, 0xC4, 0x2B, 0x5C, 0xDB, 0x47, 0xCB,
        0xD9, 0xFC, 0xE5, 0x2D, 0x43, 0x19, 0xFB, 0x14, 0x50, 0x77, 0x93, 0xC3, 0x70, 0xBF, 0xAA, 0x31,
        0x1E, 0xC5, 0x82, 0xD4, 0xC7, 0x6B, 0xE1, 0xA5, 0xD6, 0x4F, 0x31, 0x87, 0x06, 0x3F, 0x64, 0xFE,
        0x3E, 0xD9, 0x7F, 0x8E, 0xB8, 0xDC, 0x17, 0x70, 0x0F, 0xCB, 0x5A, 0xC2, 0x66, 0xA7, 0xF9, 0xB7,
        0x7D, 0x8E, 0xCE, 0xFA, 0x63, 0x89, 0x53, 0x3E, 0x5D, 0xA8, 0x82, 0xFC, 0xEF, 0x28, 0xA0, 0x99,
        0x0E, 0xEB, 0xE9, 0x63, 0xF5, 0x2B, 0x1B, 0xBB, 0x8C, 0x99, 0x8F, 0xAD, 0x21, 0xB1, 0xAD, 0xE2,
        0x11, 0xFB, 0x25, 0x77, 0xEA, 0x55, 0x2B, 0x67, 0xA5, 0x5F, 0x77, 0xE7, 0x5F, 0x1F, 0xEF, 0x9D,
        0xB6, 0x2C, 0x88, 0xE2, 0xEF, 0x5D, 0xFB, 0x36, 0xC6, 0x8D, 0x2C, 0x34, 0x15, 0xF2, 0x30, 0x3E,
        0x42, 0x60, 0x9B, 0xBF, 0xDC, 0x7E, 0x5F, 0x3F, 0xD2, 0xA8, 0x61, 0xC5, 0x6E, 0x6A, 0xE0, 0x74,
        0xE3, 0x97, 0xFA, 0x51, 0xE7, 0xA2, 0xC2, 0x22, 0x2A, 0xFD, 0x2F, 0x7F, 0x8E, 0x83, 0xE8, 0x2D,
        0x01, 0x52, 0x09, 0x90, 0x48, 0x86, 0x04, 0x40, 0x16, 0x0E, 0x4B, 0xF2, 0x02, 0x91, 0x12, 0x2F,
        0xFE, 0x11, 0xB9, 0xA4, 0xB9, 0xCF, 0x98, 0xC7, 0xD5, 0x14, 0xA7, 0xA2, 0x26, 0x5F, 0x2A, 0x23,
        0x34, 0x65, 0x15, 0x1F, 0xD5, 0x70, 0xC1, 0x11, 0x62, 0xDE, 0xB5, 0x0F, 0xD1, 0xEB, 0xD8, 0x4E,
        0x7B, 0xF2, 0x75, 0x92, 0xF9, 0x55, 0xCB, 0xB4, 0xBB, 0x21, 0x7C, 0x4A, 0x6C, 0xB0, 0xD2, 0xC8,
        0x08, 0xA2, 0xB1, 0xC6, 0x38, 0x2A, 0x43, 0x1D, 0x78, 0xEC, 0x89, 0xEB, 0xD9, 0x29, 0x01, 0xEC,
        0x4E, 0xF1, 0x90, 0x0F, 0xFC, 0x1D, 0xAB, 0x97, 0x3E, 0x65, 0xF8, 0xD5, 0x0B, 0x6F, 0x90, 0xEB,
        0x78, 0x12, 0x58, 0xA8, 0x58, 0x85, 0x2A, 0xF9, 0xF7, 0xE7, 0x48, 0xAC, 0xBC, 0x4D, 0xA0, 0x47,
        0x23, 0xDE, 0x20, 0xB3, 0xD8, 0x0D, 0xDE, 0x5C, 0x8F, 0x55, 0x3D, 0x97, 0xA0, 0x99, 0x4A, 0x1C,
        0x5B, 0x8C, 0x8F, 0xDB, 0x88, 0xFB, 0xA0, 0xBD, 0xB1, 0xDA, 0xBE, 0xF1, 0x9B, 0xB4, 0xD9, 0x94,
        0x92, 0xEF, 0xB1, 0xD1, 0xDD, 0x2C, 0x8E, 0xAB, 0x11, 0xA7, 0x93, 0x04, 0x50, 0xB8, 0xF8, 0x8F,
        0x9E, 0xF0, 0x0D, 0xAB, 0x37, 0x44, 0x82, 0x19, 0x6F, 0xEC, 0x16, 0xBC, 0x0F, 0xE8, 0xD1, 0x08,
        0x91, 0x78, 0xA7, 0xDC, 0xB1, 0x88, 0xD5, 0x81, 0xF3, 0xB8, 0x09, 0xF4, 0xFC, 0x36, 0xEA, 0x33,
        0x5F, 0x74, 0xC3, 0x43, 0x95, 0xAE, 0xDB, 0x6C, 0x82, 0xB7, 0xCD, 0x91, 0xF8, 0x39, 0xB5, 0x30,
        0x2F, 0xAE, 0x59, 0x84, 0x76, 0x12, 0x38, 0x4C, 0xE1, 0x01, 0x3B, 0x98, 0x48, 0xC5, 0x3E, 0xDD,
        0x63, 0xB6, 0xFF, 0xC8, 0xBC, 0x1A, 0x84, 0x93, 0xF7, 0x2C, 0xC9, 0x38, 0xBB, 0x96, 0xD9, 0x35,
        0x1C, 0x9D, 0xFD, 0xF0, 0x74, 0x78, 0x86, 0x0E, 0xBD, 0x4E, 0x7F, 0xD8, 0x54, 0xAE, 0xBF, 0x73,
        0xD7, 0xAB, 0x10, 0x32, 0x5A, 0x31, 0xED, 0x1A, 0x5D, 0x1C, 0xCC, 0xD3, 0x59, 0x7F, 0x0A, 0xF8,
        0x51, 0xDD, 0x5C, 0x72, 0x11, 0x5E, 0x7A, 0x79, 0x53, 0x03, 0xD4, 0x57, 0x0A, 0xC5, 0x59, 0x70,
        0x13, 0x6E, 0xB4, 0xF7, 0xD9, 0xF6, 0xAA, 0x69, 0x51, 0xEB, 0x3C, 0xD0, 0x6A, 0x5A, 0x9C, 0xB5,
        0x47, 0xEF, 0x66, 0x9D, 0xC0, 0xD9, 0x91, 0x05, 0x8B, 0xF3, 0xB1, 0xBF, 0xC0, 0x5E, 0x44, 0xB4,
        0xB3, 0xF6, 0x5D, 0x61, 0xE6, 0x29, 0x38, 0x4F, 0x3D, 0x27, 0x57, 0xC8, 0x87, 0x5E, 0xA4, 0x0B,
        0xB7, 0x73, 0xEE, 0x4A, 0x8B, 0x86, 0x83, 0x6A, 0x52, 0x9B, 0xC5, 0xD8, 0xE9, 0xBD, 0x3C, 0xA5,
        0x2B, 0x33, 0x5C, 0x03, 0x70, 0x50, 0xEC, 0x95, 0x0D, 0xDB, 0xEB, 0xDD, 0xB4, 0xB4, 0x1A, 0x9E,
        0xC3, 0xAB, 0x8C, 0xA3, 0x8D, 0xFE, 0x22, 0xD2, 0x20, 0xBE, 0xE6, 0x8E, 0x36, 0xE1, 0x0B, 0x58,
        0x42, 0x3A, 0x5B, 0x1A, 0xBC, 0xD7, 0x01, 0x1E, 0x32, 0x8A, 0x7D, 0x6F, 0xF2, 0x69, 0x81, 0x5B,
        0xEE, 0x8F, 0xFD, 0xAF, 0x75, 0x3A, 0x05, 0xA3, 0xCC, 0x6F, 0xFC, 0x15, 0x58, 0x9C, 0xA4, 0xA5,
        0x59, 0x54, 0x20, 0xDF, 0xEE, 0x37, 0xC1, 0x46, 0x88, 0x8E, 0x96, 0xDD, 0x6B, 0xF9, 0xC3, 0x60,
        0xF1, 0xBB, 0x28, 0xFB, 0xBF, 0x47, 0xAF, 0xE0, 0x77, 0xF9, 0x06, 0xBA, 0xDA, 0x7D, 0xD8, 0x94,
        0x89, 0xFA, 0x79, 0x15, 0xE3, 0x5E, 0x71, 0xA4, 0xDF, 0x06, 0xCB, 0x08, 0x15, 0xCF, 0x64, 0xA3,
        0x24, 0x5F, 0xE8, 0x36, 0x3F, 0x25, 0xA5, 0x1D, 0x9D, 0x5F, 0x54, 0x7C, 0x2D, 0xCC, 0x93, 0x6C,
        0xF2, 0x70, 0xBF, 0xA2, 0x64, 0x7A, 0x38, 0x7D, 0xAD, 0xA0, 0xB6, 0xF8, 0x8F, 0xB6, 0xD6, 0x5B,
        0x14, 0x00, 0xA3, 0x24, 0xD8, 0x47, 0x0B, 0x03, 0x98, 0x96, 0x1E, 0xEC, 0x60, 0xA1, 0x5A, 0x32,
        0x5D, 0x7A, 0x35, 0x8C, 0x35, 0x58, 0x19, 0xBD, 0xF7, 0xDD, 0x16, 0x89, 0x4B, 0x67, 0x59, 0xFB,
        0xC2, 0xBF, 0xCA, 0xEC, 0x40, 0xCC, 0x5A, 0x6C, 0xE4, 0x40, 0x9C, 0xDE, 0x54, 0x06, 0x9A, 0xC6,
        0x74, 0xA1, 0x39, 0x9A, 0x9E, 0xB4, 0xFE, 0x7F, 0xDB, 0x3E, 0x89, 0x5B, 0x55, 0xB5, 0x6C, 0x6E,
        0x2E, 0xA2, 0xE6, 0xDF, 0x53, 0x98, 0xA6, 0xCD, 0x59, 0x27, 0x17, 0x83, 0x78, 0x54, 0x88, 0xF7,
        0x08, 0xF2, 0x95, 0x60, 0xCE, 0x78, 0x73, 0xEF, 0x1D, 0x41, 0x76, 0xB2, 0x2A, 0x03, 0x65, 0x06,
        0x4F, 0x6D, 0xE5, 0x0D, 0xB2, 0x13, 0x48, 0x8B, 0x6E, 0x9D, 0x2B, 0xED, 0xFB, 0xEB, 0x4A, 0x69,
        0xEE, 0xC3, 0x30, 0x42, 0xA0, 0x52, 0x0F, 0x1E, 0x4E, 0x14, 0x0C, 0x72, 0x77, 0x87, 0x14, 0xF7,
        0xE4, 0x02, 0x43, 0x34, 0x5A, 0x0D, 0x05, 0x5F, 0xFE, 0x90, 0x00, 0xAA, 0xF9, 0xBB, 0x21, 0xD4,
        0x77, 0xE6, 0xDE, 0x62, 0xC8, 0x9B, 0xD7, 0xB2, 0xF3, 0x4D, 0x4E, 0x03, 0x41, 0x21, 0x8F, 0xE3,
        0xD9, 0x54, 0xB3, 0xCF, 0x4C, 0x1D, 0x94, 0x08, 0x73, 0x37, 0xF3, 0xB5, 0xC4, 0xF0, 0xDE, 0x5F,
        0xDC, 0x04, 0x2B, 0xBE, 0xDD, 0xC9, 0xF8, 0x23, 0x61, 0x8E, 0x0D, 0x18, 0x57, 0xFA, 0x1F, 0x57
    ]),
    "crimson": new Uint8Array([
        0x11, 0x9C, 0xB1, 0x1E, 0xFB, 0x51, 0x0C, 0x29, 0x14, 0x7F, 0xE8, 0xEF, 0x54, 0x26, 0x17, 0x52,
        0xE8, 0xD4, 0x68, 0xD4, 0xD1, 0xD1, 0xD5, 0x57, 0xCF, 0x10, 0xBB, 0x60, 0x50, 0xEC, 0xE2, 0x91,
        0xDD, 0xBF, 0x64, 0x53, 0x99, 0x87, 0x12, 0xFD, 0x36, 0xD4, 0xE4, 0x41, 0x68, 0x3D, 0xD1, 0x90,
        0x7F, 0xB6, 0x4B, 0x6F, 0xCE, 0x70, 0xC1, 0x0D, 0x03, 0xE6, 0xD3, 0xF1, 0x4D, 0x21, 0xC6, 0x44,
        0x1E, 0x43, 0x74, 0xBD, 0x29, 0x9D, 0xC0, 0x9B, 0x4F, 0x10, 0x33, 0x40, 0x97, 0xE8, 0xD4, 0xDC,
        0x86, 0xDE, 0xB9, 0x6F, 0x9B, 0xAA, 0xA9, 0xD9, 0x1D, 0x0B, 0x78, 0xAB, 0x3B, 0x22, 0xC1, 0x30,
        0x3E, 0xC4, 0x43, 0x76, 0x63, 0xC6, 0xDF, 0xA9, 0x79, 0xEC, 0x14, 0xF8, 0x8E, 0x80, 0x95, 0x46,
        0x41, 0x21, 0x93, 0x2D, 0xAF, 0x32, 0xD9, 0x3F, 0x66, 0xAD, 0x34, 0x57, 0x8B, 0xA4, 0x8F, 0xE9,
        0x09, 0x6C, 0x95, 0x91, 0xF3, 0xE8, 0xD7, 0xE4, 0x57, 0x0E, 0x12, 0x75, 0x2A, 0x69, 0x9D, 0x24,
        0x50, 0x6D, 0xBB, 0x11, 0x7E, 0xB6, 0x42, 0x70, 0xC1, 0x8F, 0x3B, 0xDE, 0x2B, 0xD1, 0x54, 0x6A,
        0x57, 0xB0, 0x14, 0xF5, 0x53, 0xA0, 0x27, 0xC2, 0xFA, 0xDF, 0xFD, 0x4A, 0x64, 0x4A, 0x4A, 0x36,
        0x9C, 0xAB, 0x87, 0xE3, 0x19, 0x75, 0xBE, 0x24, 0x6D, 0x83, 0x70, 0xFB, 0x76, 0x7C, 0x58, 0xA8,
        0x9B, 0x07, 0xC3, 0xA6, 0x0E, 0x39, 0xC2, 0xC9, 0x35, 0xDB, 0x1E, 0xFD, 0x18, 0xAA, 0x5C, 0x10,
        0x3F, 0xD1, 0x1B, 0x27, 0xE4, 0xB8, 0x78, 0x85, 0xC7, 0x14, 0x1A, 0xA9, 0xAD, 0xDE, 0x05, 0xCB,
        0x09, 0xEE, 0x5B, 0x9F, 0xBF, 0x4B, 0x12, 0x71, 0xE8, 0xAF, 0x8F, 0xCF, 0xD8, 0x08, 0x57, 0x2D,
        0xBC, 0x0A, 0xCC, 0x17, 0xC3, 0xB7, 0xED, 0xFF, 0x49, 0x49, 0xB6, 0x4D, 0x79, 0xE5, 0x1F, 0xA0,
        0x82, 0x0C, 0xB3, 0x9F, 0xE9, 0x0D, 0xDD, 0x7F, 0xAA, 0x86, 0xF5, 0x91, 0xC5, 0xD2, 0xB9, 0x43,
        0x5D, 0x86, 0xFA, 0xEF, 0xB9, 0x63, 0x88, 0xF3, 0xDE, 0x20, 0xF5, 0xC7, 0x9E, 0x5D, 0xA1, 0xC0,
        0x04, 0xE1, 0x67, 0x79, 0x43, 0x52, 0xB9, 0x2C, 0x55, 0xC8, 0x89, 0xE3, 0x41, 0xA6, 0x17, 0xF8,
        0x46, 0x7B, 0x14, 0xEA, 0x8A, 0x95, 0x25, 0xAC, 0xB4, 0x34, 0x47, 0x7B, 0x6B, 0xE9, 0x8A, 0xB0,
        0x7B, 0xCF, 0x2C, 0x9C, 0x97, 0xAC, 0x7F, 0xA2, 0x4E, 0x7C, 0x73, 0x63, 0x62, 0xEF, 0x56, 0x10,
        0x96, 0x58, 0x43, 0x23, 0x40, 0xD5, 0xEF, 0x99, 0x5A, 0xE8, 0x4D, 0xE1, 0x4D, 0xF7, 0x89, 0xAC,
        0x2E, 0xB7, 0x0F, 0x22, 0x7A, 0x6A, 0x16, 0xA2, 0x09, 0xED, 0x47, 0x31, 0x73, 0x99, 0x77, 0xB7,
        0xFF, 0x18, 0xC4, 0x23, 0xF9, 0xEC, 0x83, 0x76, 0x14, 0x3F, 0x39, 0x81, 0x6A, 0xE5, 0x9F, 0x60,
        0x26, 0x31, 0xA1, 0x0F, 0x12, 0x71, 0xEB, 0xC7, 0xD8, 0x6F, 0x8F, 0xB1, 0x0C, 0x37, 0x59, 0x74,
        0x9B, 0x16, 0x0A, 0x1A, 0x4D, 0x70, 0x76, 0xFF, 0x67, 0xAB, 0x80, 0x67, 0xEF, 0x88, 0x9B, 0x9A,
        0xE7, 0x9F, 0x34, 0x5E, 0x1A, 0x68, 0x03, 0xE9, 0x2A, 0x76, 0x67, 0xC9, 0xE2, 0x8B, 0x36, 0x8B,
        0x17, 0x3B, 0xF0, 0xAF, 0x5C, 0xD5, 0x07, 0xD4, 0x45, 0x99, 0x30, 0x03, 0xB8, 0xF1, 0x33, 0xD4,
        0xFE, 0x08, 0xB7, 0xFE, 0xC2, 0x87, 0xD8, 0x72, 0x91, 0x61, 0x9F, 0x3F, 0xEC, 0xB4, 0x3E, 0x56,
        0xBF, 0x61, 0xEF, 0x97, 0xBE, 0x5B, 0xA7, 0x81, 0xCF, 0xB8, 0xF0, 0xEB, 0xF3, 0x66, 0x1F, 0xF0,
        0xD6, 0x83, 0x64, 0xBD, 0xB1, 0xBF, 0x49, 0xC0, 0x5E, 0x87, 0x32, 0xAE, 0x13, 0x9B, 0x78, 0xED,
        0x77, 0x7C, 0xB9, 0xB2, 0x8A, 0x8A, 0xD4, 0x05, 0xE1, 0x08, 0xB2, 0xB9, 0xCE, 0x0D, 0x43, 0xFC,
        0xC9, 0xD0, 0xB3, 0x25, 0xFE, 0x07, 0x15, 0x9D, 0x9E, 0x96, 0xE8, 0x3B, 0xC4, 0x73, 0xD5, 0x9A,
        0x75, 0x69, 0x14, 0x73, 0xB8, 0x7A, 0xE6, 0xA9, 0x90, 0xF2, 0x53, 0x89, 0x42, 0x3F, 0x5C, 0x82,
        0x80, 0x4D, 0xBD, 0xF6, 0x8A, 0x66, 0xDD, 0x99, 0x4E, 0x75, 0xE4, 0xE3, 0xFE, 0xE2, 0xB2, 0xD2,
        0xC7, 0x62, 0x94, 0x9F, 0xF5, 0x67, 0x35, 0x6A, 0x66, 0x9F, 0x9A, 0x3D, 0xFD, 0xCD, 0xF2, 0x70,
        0xFA, 0x68, 0xB9, 0x6A, 0x64, 0xE1, 0x8C, 0x67, 0x20, 0x1E, 0x80, 0x4D, 0x7C, 0x20, 0x6B, 0x56,
        0x1E, 0xA7, 0xA2, 0xC0, 0x41, 0x20, 0x2B, 0x7B, 0xC5, 0xAB, 0xBA, 0xD7, 0xE6, 0x8C, 0x1A, 0x45,
        0x8E, 0x22, 0x11, 0xA4, 0x1A, 0x31, 0x77, 0xA5, 0xC6, 0x12, 0x97, 0x9A, 0xD4, 0x35, 0x53, 0xA4,
        0x73, 0xE7, 0xCD, 0x6F, 0x0B, 0x0A, 0xD0, 0x30, 0x9A, 0xFE, 0x24, 0xD9, 0xD9, 0xD1, 0xB9, 0xDF,
        0x27, 0xC9, 0x2B, 0xA8, 0xA2, 0xB4, 0xBD, 0xD8, 0x33, 0x59, 0xE8, 0xAB, 0x77, 0x3B, 0xDB, 0xE7,
        0xD4, 0x02, 0x49, 0x64, 0x67, 0x25, 0x78, 0x5F, 0x81, 0xD5, 0x43, 0xFA, 0x84, 0x4F, 0x03, 0x85,
        0x30, 0xAD, 0xAE, 0xB7, 0x9B, 0x95, 0x4D, 0x24, 0xFF, 0x16, 0x30, 0x76, 0x92, 0xB7, 0x1B, 0x1D,
        0x65, 0x2E, 0xF0, 0x73, 0xA2, 0x09, 0xF0, 0x0F, 0xF8, 0xD7, 0xAB, 0x7D, 0x71, 0x02, 0x32, 0x31,
        0x76, 0x95, 0x02, 0x35, 0x63, 0x3C, 0x0D, 0x9F, 0x55, 0x1B, 0xBC, 0x6F, 0x49, 0xC8, 0x88, 0xC8,
        0x07, 0xAB, 0xE3, 0x4C, 0x4E, 0x61, 0x99, 0xC8, 0x9C, 0x1F, 0x38, 0x95, 0x8D, 0x89, 0xCD, 0x5F,
        0x81, 0xF1, 0xC3, 0x27, 0xE2, 0x31, 0x62, 0x3C, 0xE3, 0xF0, 0xC2, 0x1B, 0x9F, 0x81, 0x21, 0xFC,
        0x9F, 0x62, 0x34, 0x01, 0x9A, 0xA6, 0x88, 0x16, 0xCF, 0x45, 0x8F, 0x26, 0x83, 0x11, 0xF1, 0xB0,
        0x46, 0xCE, 0xC9, 0xA5, 0xA6, 0xAB, 0x83, 0x7D, 0x8C, 0xF8, 0x0E, 0x22, 0x2A, 0x2D, 0xDE, 0x80,
        0x2E, 0x2D, 0xFD, 0x1F, 0x9F, 0x6E, 0xDA, 0x9F, 0x1D, 0xE2, 0x5C, 0x6C, 0xFD, 0x39, 0x95, 0x93,
        0xF0, 0xCC, 0x98, 0xEA, 0xC3, 0xC7, 0x7B, 0x7B, 0xBB, 0x3D, 0xB7, 0x3B, 0x12, 0x7C, 0xA0, 0x89,
        0xEA, 0x6B, 0xBD, 0x1A, 0x78, 0x58, 0xA1, 0x99, 0x4F, 0x86, 0xB6, 0xF1, 0x87, 0x1F, 0xDD, 0x3F,
        0x59, 0x23, 0x7E, 0xDD, 0x79, 0x55, 0xB4, 0x54, 0xB9, 0xF3, 0x22, 0x81, 0x80, 0x93, 0xD5, 0x3A,
        0x06, 0x6B, 0xF5, 0x60, 0x31, 0x1C, 0x29, 0xAF, 0xB8, 0xC4, 0x41, 0x49, 0x87, 0x3C, 0xD9, 0x49,
        0xEC, 0xDE, 0x04, 0xCD, 0xC1, 0x4F, 0xE8, 0x4F, 0x5B, 0x96, 0x59, 0x71, 0xF4, 0x3D, 0x60, 0x50,
        0xE1, 0xFF, 0x7C, 0x1B, 0x97, 0x0B, 0xB0, 0x86, 0xBA, 0xDB, 0x6D, 0x7B, 0xA8, 0x24, 0x5D, 0x09,
        0x09, 0xC1, 0xB2, 0xA5, 0x52, 0x66, 0xAD, 0x1A, 0xF4, 0xF0, 0x53, 0xB0, 0xED, 0x44, 0xB9, 0x48,
        0xDC, 0xAE, 0x51, 0xBD, 0xC5, 0xAB, 0x3C, 0x1F, 0xA7, 0xF9, 0xBE, 0x8E, 0x06, 0x5B, 0xF4, 0x07,
        0x79, 0x09, 0x76, 0x5A, 0xF2, 0x95, 0xC6, 0x23, 0xFD, 0xF8, 0xEC, 0xED, 0xAB, 0xF0, 0xC6, 0x8C,
        0xE9, 0x1B, 0x27, 0x30, 0x7A, 0x3E, 0xA3, 0xCE, 0xF5, 0xC8, 0xFF, 0x7D, 0x63, 0x6A, 0xAD, 0xD2,
        0x02, 0xA2, 0xFE, 0xB6, 0x33, 0x3E, 0x46, 0x29, 0xA0, 0xD4, 0xA5, 0xA9, 0x21, 0x41, 0x90, 0x1D,
        0x42, 0x39, 0xFD, 0x39, 0xCA, 0x15, 0x81, 0xB9, 0x0E, 0xEA, 0x97, 0x58, 0x5F, 0x64, 0x46, 0x27,
        0xD4, 0xCB, 0x2A, 0x96, 0x42, 0x17, 0xC6, 0xC8, 0xAB, 0x3E, 0xBF, 0xAA, 0xD8, 0x4B, 0x7B, 0x72,
        0xAE, 0x0B, 0x88, 0x9E, 0x1D, 0x21, 0x33, 0x67, 0x91, 0x8D, 0x3E, 0xC2, 0x1E, 0x56, 0xD4, 0x16,
        0xE5, 0x95, 0x43, 0xD6, 0x14, 0x99, 0x16, 0x4A, 0x61, 0x92, 0x34, 0x31, 0xE1, 0x3E, 0x99, 0x36,
        0xE5, 0x1F, 0x6D, 0x94, 0x57, 0xCA, 0x0C, 0xF7, 0x43, 0xA9, 0x91, 0x3D, 0x1C, 0x0A, 0xD0, 0x5A,
        0x54, 0x1D, 0x11, 0xC1, 0xC3, 0x08, 0x44, 0xE0, 0x99, 0x0F, 0x6C, 0x78, 0xB7, 0x68, 0x9D, 0x89,
        0x3F, 0x90, 0x78, 0xF4, 0xBF, 0x26, 0x99, 0x8E, 0x91, 0xB4, 0x1C, 0x6C, 0x1A, 0x2A, 0xBD, 0x74,
        0xBA, 0xCE, 0x12, 0xF4, 0xC0, 0xB5, 0x7C, 0xA0, 0xF9, 0xDD, 0xA2, 0x23, 0x27, 0xBE, 0x58, 0x44,
        0x14, 0x1B, 0xFF, 0x95, 0xB5, 0x53, 0x01, 0xD4, 0xEE, 0x25, 0xEB, 0xBE, 0xF0, 0xA4, 0xD8, 0x1F,
        0x7A, 0x44, 0x76, 0x54, 0x04, 0xA9, 0xB1, 0xC7, 0xB6, 0x75, 0xD0, 0x37, 0xAD, 0xA7, 0x78, 0x73,
        0x36, 0x7D, 0xAD, 0xD7, 0x28, 0x32, 0x17, 0xDD, 0x28, 0x23, 0xE1, 0x24, 0xA4, 0x23, 0xE5, 0x3F,
        0x09, 0x7B, 0x54, 0xBC, 0x99, 0x3E, 0x29, 0xF2, 0x6D, 0x89, 0xAC, 0x55, 0x6E, 0x36, 0x56, 0x52,
        0x6C, 0x03, 0xE6, 0x33, 0x51, 0x0F, 0x99, 0xDD, 0x62, 0x44, 0x99, 0xD3, 0x46, 0x09, 0x56, 0x7A,
        0xD7, 0xD7, 0x5C, 0x36, 0xEE, 0x6F, 0x75, 0x2B, 0x3A, 0x8C, 0x2B, 0x48, 0x7E, 0x3E, 0x83, 0xFC,
        0x36, 0x6A, 0xF3, 0x8B, 0x79, 0xE1, 0x19, 0x04, 0x40, 0x5C, 0x13, 0x7E, 0x14, 0xEB, 0xCF, 0xA0,
        0xD9, 0x87, 0x6E, 0x00, 0x49, 0xB3, 0xD3, 0x75, 0xAA, 0x5D, 0xCA, 0xF6, 0x6B, 0xDC, 0x0B, 0x36,
        0x6E, 0xA4, 0xBC, 0x10, 0xEE, 0x9A, 0x25, 0x44, 0x9B, 0x52, 0x78, 0xD2, 0x36, 0x30, 0x51, 0xC5,
        0x3C, 0xFC, 0x40, 0x8E, 0xCD, 0xF9, 0xE8, 0xE9, 0x19, 0x34, 0x6F, 0x97, 0x1B, 0xBC, 0x94, 0x56,
        0xA9, 0xFF, 0x86, 0x41, 0xA4, 0x50, 0xB0, 0x11, 0x5E, 0xA9, 0xA1, 0xD1, 0x41, 0x46, 0x43, 0x60,
        0xAA, 0x1B, 0xC6, 0xE3, 0x66, 0x7B, 0x04, 0x4E, 0x90, 0xD7, 0xCD, 0x77, 0x9E, 0x0C, 0x93, 0x4C,
        0x9D, 0xEE, 0xA1, 0x68, 0x18, 0x71, 0xAF, 0xFE, 0x0B, 0x0E, 0x95, 0x29, 0x10, 0xC1, 0xF1, 0x25,
        0x00, 0xEA, 0xD5, 0xA6, 0xE7, 0x32, 0xE2, 0x72, 0x8A, 0xBB, 0x70, 0xE8, 0x0E, 0x24, 0xCF, 0x8B,
        0xB9, 0xB7, 0xC9, 0x83, 0x62, 0xC7, 0x80, 0x69, 0xF3, 0x72, 0x21, 0x84, 0x6F, 0x61, 0x20, 0xC9,
        0x46, 0x5B, 0x06, 0x8D, 0xC8, 0xB1, 0xC0, 0xF7, 0x6D, 0xAE, 0x02, 0x87, 0xF3, 0xBD, 0x5F, 0x18,
        0x60, 0x2E, 0xA2, 0x80, 0x35, 0x1C, 0x46, 0xFE, 0xB5, 0x92, 0xA7, 0x47, 0x0F, 0x5F, 0xB1, 0x46,
        0x25, 0xD0, 0xCA, 0x18, 0x8F, 0x34, 0xB9, 0xEC, 0xBC, 0xD3, 0x38, 0x16, 0x54, 0x95, 0x48, 0xA2,
        0xD9, 0xCC, 0x90, 0xB3, 0xDE, 0x46, 0x8F, 0x3B, 0x22, 0xC4, 0x69, 0x6A, 0xD2, 0xA8, 0xE6, 0xE7,
        0x9A, 0x46, 0xE1, 0x84, 0xD9, 0xC5, 0x0C, 0x96, 0x61, 0xB3, 0x70, 0xED, 0x69, 0x03, 0x61, 0xC1,
        0x3D, 0x6C, 0xC7, 0xDC, 0xFA, 0x86, 0x6A, 0x43, 0x0B, 0x51, 0xF9, 0xD2, 0x26, 0x66, 0x2A, 0x8A,
        0xFA, 0x5A, 0x11, 0xDD, 0xF7, 0x95, 0x62, 0x7A, 0xE5, 0x3F, 0x60, 0xA1, 0x50, 0x5A, 0x5F, 0x75,
        0xF3, 0xF1, 0x0B, 0x2A, 0x6D, 0xAC, 0x4B, 0xB9, 0x23, 0x1F, 0x18, 0x1E, 0xE2, 0x6B, 0x28, 0xF6,
        0xF2, 0xFD, 0x17, 0x1A, 0xEC, 0x84, 0x8A, 0x00, 0x77, 0x52, 0x6D, 0x94, 0x41, 0x82, 0x2C, 0xB6,
        0x15, 0x96, 0x09, 0x03, 0x0C, 0xD1, 0xF9, 0xA9, 0x07, 0x41, 0x2D, 0x54, 0xE8, 0x6A, 0x52, 0x94,
        0xB5, 0x9D, 0x92, 0xED, 0xE1, 0xD8, 0xF5, 0x27, 0x1B, 0xF9, 0xF7, 0x43, 0xDE, 0xE7, 0x37, 0x5E,
        0x17, 0x5B, 0xA6, 0x09, 0x90, 0xF7, 0xDC, 0xCE, 0x24, 0x31, 0xEF, 0xC1, 0x5A, 0xBD, 0x41, 0x70,
        0xCA, 0x87, 0xE7, 0x10, 0x64, 0x68, 0xFC, 0x31, 0x71, 0x7A, 0x03, 0x25, 0x4F, 0xBC, 0x48, 0x04,
        0x05, 0x30, 0xFE, 0x70, 0xCD, 0x22, 0x5F, 0x06, 0x60, 0x42, 0x4C, 0xA8, 0x5C, 0x2A, 0x35, 0x91,
        0x97, 0x45, 0xE3, 0xE9, 0xC2, 0x6A, 0x83, 0x19, 0x22, 0x03, 0xBC, 0xCC, 0xDE, 0x63, 0x77, 0xEB,
        0xDA, 0x21, 0x19, 0x70, 0x15, 0x3A, 0x9B, 0x8E, 0x75, 0x3E, 0x91, 0x22, 0x87, 0x68, 0x55, 0x55,
        0x2D, 0xAD, 0x32, 0xB3, 0x50, 0x38, 0x0F, 0xAB, 0xF0, 0x1A, 0x5B, 0xA1, 0xE9, 0x2A, 0x7D, 0x23,
        0x0E, 0x4D, 0xBF, 0xFD, 0x10, 0xCE, 0x3C, 0x1C, 0xF2, 0xDE, 0xB0, 0x5E, 0xA0, 0x53, 0xF8, 0x90,
        0x17, 0x4E, 0x90, 0x05, 0xD0, 0x19, 0x83, 0x2C, 0x7C, 0x4A, 0x05, 0x3E, 0xB6, 0x48, 0xC7, 0xB4,
        0x54, 0xC5, 0x49, 0xDF, 0x62, 0xFB, 0xF8, 0x19, 0x22, 0x26, 0x23, 0x05, 0x94, 0x90, 0xE6, 0x9F,
        0x74, 0x03, 0x40, 0xB4, 0x46, 0x91, 0x48, 0xD1, 0xB2, 0x59, 0xBE, 0x2A, 0x75, 0x75, 0x6F, 0x4D,
        0x41, 0xAF, 0xEA, 0xA4, 0x6B, 0xB2, 0x62, 0x77, 0x50, 0xA9, 0xEC, 0x79, 0xC2, 0x09, 0xBB, 0x8B,
        0x09, 0xF1, 0xC8, 0x96, 0x87, 0x9A, 0xA6, 0x99, 0x24, 0x77, 0xFA, 0x36, 0xB0, 0x5A, 0x4C, 0x53,
        0x96, 0xCF, 0xEF, 0x31, 0x52, 0x77, 0x9C, 0x79, 0x39, 0xD1, 0x52, 0xF0, 0xCB, 0x8E, 0x10, 0x57,
        0xB9, 0xD2, 0x35, 0xBD, 0xF6, 0xA4, 0x8D, 0x32, 0x15, 0xFE, 0x64, 0xE4, 0x61, 0x45, 0x87, 0x12,
        0xF9, 0x81, 0x1B, 0x40, 0xAE, 0x71, 0x51, 0x9F, 0x12, 0x68, 0x67, 0x2F, 0xC3, 0xE3, 0x03, 0x33,
        0x05, 0x29, 0xB9, 0x21, 0xA6, 0x3A, 0x1E, 0xD7, 0x6C, 0xD6, 0xFB, 0x79, 0xD7, 0xBE, 0x4A, 0x3C,
        0x09, 0x04, 0x90, 0x14, 0x63, 0x6F, 0xC2, 0x6E, 0x23, 0x52, 0x74, 0x24, 0x47, 0x62, 0xF2, 0x6D,
        0xA0, 0x3F, 0xB1, 0xE1, 0x7E, 0xA1, 0x64, 0x67, 0x33, 0x63, 0x6B, 0xFA, 0x13, 0x94, 0x8E, 0x6D,
        0xAB, 0x98, 0x1C, 0xF2, 0xAF, 0xFA, 0x57, 0xD4, 0x67, 0x0C, 0x7C, 0xA1, 0x78, 0x8B, 0x50, 0xF1,
        0xAE, 0x9C, 0x89, 0xF8, 0x52, 0x22, 0xFF, 0x3A, 0xA2, 0xE0, 0xBD, 0xF2, 0xF5, 0x00, 0xE0, 0x62,
        0x11, 0x80, 0xEE, 0xB5, 0xFF, 0xCB, 0xA2, 0x49, 0x6B, 0xF1, 0xBC, 0xA8, 0xC6, 0x97, 0xEB, 0xDD,
        0xD3, 0x07, 0xCE, 0xDA, 0xDE, 0x5E, 0xB0, 0x24, 0x95, 0x0F, 0x8A, 0x4F, 0x04, 0x9E, 0x73, 0xDA,
        0x75, 0xE5, 0xEE, 0xA6, 0x09, 0x4C, 0x91, 0xEB, 0x91, 0xD2, 0x10, 0x51, 0x62, 0xEE, 0xBC, 0x88,
        0xF5, 0x2B, 0xB4, 0x51, 0xF5, 0x0A, 0x4F, 0x3D, 0x31, 0xDF, 0x56, 0x53, 0x57, 0x66, 0xB9, 0x67,
        0x0A, 0x28, 0x65, 0xAA, 0x6A, 0xC3, 0x95, 0xC1, 0xE3, 0xE3, 0xC2, 0xA4, 0x32, 0xAD, 0xB8, 0x08,
        0xD3, 0x4C, 0x77, 0x97, 0x3B, 0x88, 0xDC, 0xAB, 0x02, 0xA3, 0x84, 0xE3, 0x0A, 0xA5, 0x46, 0xF3,
        0x18, 0xFA, 0x2E, 0xF6, 0x7B, 0xCB, 0xD2, 0xD0, 0x7F, 0x0A, 0xE7, 0x7B, 0x3B, 0xD3, 0x8B, 0x3C,
        0x29, 0x7C, 0xF7, 0x6A, 0x80, 0xA0, 0xDC, 0x31, 0x19, 0x3D, 0x8D, 0x03, 0x93, 0x08, 0xA6, 0xAA,
        0xB4, 0xEE, 0x95, 0xAF, 0x55, 0x89, 0xB3, 0x7D, 0x14, 0x66, 0x8C, 0xA1, 0xDA, 0x5E, 0x7A, 0x46,
        0xE1, 0x0B, 0x81, 0xED, 0xA8, 0xE9, 0x39, 0xD6, 0xD5, 0x94, 0x0A, 0xA7, 0x82, 0x1F, 0x40, 0x23,
        0xF0, 0xBC, 0xEF, 0x8E, 0x2C, 0xF9, 0xAF, 0xEC, 0x53, 0x5D, 0xBF, 0x30, 0xE1, 0xAE, 0xB8, 0x1E,
        0x22, 0x1A, 0xD1, 0x8E, 0x44, 0xB8, 0x07, 0x50, 0x75, 0x98, 0x8F, 0x74, 0xDD, 0x7B, 0x79, 0x30,
        0x7C, 0x93, 0xEF, 0xB0, 0x46, 0xDD, 0x6C, 0x57, 0xE4, 0xF8, 0x49, 0xC5, 0xFF, 0x49, 0x69, 0xE6,
        0xE9, 0x60, 0x5B, 0x5D, 0x1E, 0x65, 0x17, 0x04, 0x43, 0x1E, 0x79, 0xAC, 0x75, 0xB3, 0xA1, 0xFF,
        0x3C, 0x83, 0x2F, 0xF9, 0xDD, 0xCB, 0x49, 0x36, 0x08, 0x7A, 0x97, 0xEB, 0x57, 0x7D, 0xD6, 0x0A,
        0x12, 0x33, 0x01, 0x27, 0x61, 0xCC, 0x1A, 0xC9, 0x4B, 0xBD, 0x54, 0xED, 0xEA, 0xF2, 0x14, 0x29,
        0x66, 0xA6, 0x62, 0x3E, 0x1E, 0x27, 0x20, 0xA6, 0xF0, 0x42, 0xFF, 0xE6, 0x30, 0x4C, 0x7B, 0x95,
        0x85, 0xD0, 0xD9, 0x3F, 0xE4, 0x8D, 0x5D, 0x77, 0x75, 0x54, 0xA9, 0xF5, 0x1B, 0xC2, 0xBD, 0x36,
        0x13, 0x0E, 0x82, 0xF9, 0xF0, 0xE0, 0xD4, 0x75, 0xD7, 0x7D, 0xFA, 0xCA, 0x80, 0xA3, 0x73, 0x20,
        0x87, 0x6E, 0x90, 0x30, 0xE5, 0x1B, 0x74, 0x73, 0x8D, 0xFF, 0x42, 0xF0, 0x03, 0xE1, 0x06, 0x31,
        0x66, 0xCF, 0x33, 0x53, 0x57, 0xE9, 0x4A, 0xBC, 0x5A, 0x75, 0x73, 0x01, 0xF9, 0xCC, 0x98, 0xEB,
        0xBB, 0x8E, 0x19, 0x81, 0x38, 0xE0, 0xC1, 0x3A, 0x76, 0x3E, 0x4A, 0x59, 0x7C, 0xC1, 0xF5, 0x52,
        0x09, 0x12, 0xF5, 0x56, 0x83, 0xE3, 0xC0, 0xDF, 0xAE, 0xF2, 0xB4, 0x08, 0xA3, 0xB2, 0x76, 0xEE,
        0x42, 0x49, 0x1C, 0xC4, 0xEA, 0x95, 0x67, 0x9E, 0x59, 0x1B, 0xD7, 0xAD, 0xDC, 0xA9, 0x0D, 0x6A,
        0x02, 0x2D, 0x23, 0x24, 0xF3, 0xCC, 0xC8, 0xA3, 0x13, 0xC4, 0xDD, 0x03, 0xCF, 0xAE, 0x1F, 0x0B,
        0x43, 0xB3, 0x38, 0xD1, 0xC7, 0x33, 0x59, 0x11, 0xC5, 0x8E, 0x93, 0x4D, 0x4C, 0x00, 0x11, 0x27,
        0xB2, 0x3C, 0x68, 0x8C, 0x37, 0x93, 0x2C, 0x92, 0xA6, 0xEE, 0x17, 0x1A, 0xC6, 0xAE, 0x07, 0x53,
        0x19, 0x68, 0x6B, 0xE9, 0x4C, 0x57, 0x4F, 0xD6, 0x65, 0xD0, 0x6F, 0x7F, 0x88, 0xDE, 0xFA, 0x20,
        0x62, 0x65, 0xC3, 0x4A, 0x28, 0x76, 0x31, 0xBA, 0xD7, 0x8A, 0x2F, 0x0A, 0xBC, 0xC5, 0xC9, 0x98,
        0xE5, 0x24, 0xD6, 0x1C, 0x13, 0x3B, 0x0B, 0x7E, 0x0A, 0xD1, 0x9F, 0xDB, 0x50, 0x6C, 0x75, 0x77,
        0x47, 0xDD, 0xF2, 0xF4, 0xD3, 0xD4, 0x94, 0xA1, 0xA5, 0x12, 0x6F, 0xE1, 0x8F, 0xF3, 0x3E, 0xC2,
        0x3D, 0xF2, 0x24, 0xB0, 0x13, 0xD6, 0xE2, 0x7C, 0xDB, 0xED, 0x0C, 0x9A, 0xDE, 0x6B, 0x4C, 0x5F,
        0xE5, 0xF4, 0xB0, 0xB8, 0x54, 0x07, 0x12, 0xE5, 0xD1, 0xB0, 0x0E, 0x70, 0xB8, 0x94, 0x3E, 0x70,
        0x76, 0x94, 0x69, 0x54, 0x4A, 0x45, 0xE1, 0x98, 0xD5, 0x32, 0xE8, 0x1B, 0xE7, 0x92, 0xA9, 0xEE,
        0xF2, 0x1E, 0xE4, 0x6E, 0xCD, 0xDA, 0x27, 0x54, 0x5B, 0x95, 0x41, 0x87, 0x80, 0x80, 0xE2, 0x19,
        0xF5, 0x69, 0xA5, 0x66, 0x12, 0xCA, 0x94, 0x84, 0x19, 0xF3, 0x0C, 0x03, 0x7E, 0x42, 0x11, 0x74,
        0xC8, 0xED, 0xDB, 0xAB, 0x8B, 0x9D, 0xA9, 0x5F, 0x76, 0xB0, 0x0B, 0xD7, 0xDB, 0x4F, 0x52, 0x76,
        0x69, 0x0B, 0x91, 0xD0, 0x7A, 0x48, 0x6A, 0xC1, 0x78, 0x02, 0x11, 0xB3, 0x1D, 0x6A, 0x3F, 0x99,
        0x6D, 0x10, 0xBF, 0xBF, 0xF5, 0xBA, 0xA4, 0xD1, 0xEF, 0x28, 0x1F, 0x6B, 0xC0, 0x66, 0xF6, 0x73,
        0x39, 0xEB, 0x82, 0xA6, 0xEC, 0xAC, 0x4F, 0xB5, 0x0D, 0xAB, 0x60, 0xEB, 0x50, 0x6B, 0x8F, 0xA1,
        0x02, 0x48, 0x36, 0x1A, 0x3D, 0xDD, 0x38, 0x63, 0xC0, 0x72, 0x21, 0xB1, 0x67, 0x5A, 0xC4, 0xB8,
        0xA3, 0xA3, 0x9C, 0xC4, 0xAB, 0x5A, 0xD6, 0x41, 0xE9, 0x5C, 0x97, 0x15, 0xAD, 0xB8, 0xA9, 0xCF,
        0xCA, 0xB6, 0xF1, 0xC1, 0xDB, 0x73, 0xCD, 0x7F, 0x88, 0x20, 0x7A, 0xC8, 0x61, 0x41, 0x63, 0xE1,
        0x7E, 0xA6, 0xC9, 0x10, 0xB1, 0x72, 0x32, 0xBD, 0xB4, 0x6F, 0x6A, 0x3D, 0x98, 0x7E, 0x86, 0x63,
        0xF2, 0x3F, 0x2E, 0xA1, 0x48, 0xBB, 0x30, 0x75, 0x37, 0xBC, 0x88, 0x88, 0xC0, 0x74, 0xC0, 0xD5,
        0x31, 0xEE, 0x98, 0x37, 0xF5, 0xD5, 0x11, 0x66, 0x55, 0x9E, 0x74, 0x2E, 0xF4, 0x9F, 0xA5, 0x05,
        0x5E, 0x92, 0xAD, 0x37, 0x60, 0x70, 0x09, 0x28, 0xE6, 0xA5, 0x09, 0xAC, 0x68, 0x99, 0xBA, 0x34,
        0xBC, 0x95, 0xE6, 0x27, 0xFF, 0x43, 0xC9, 0x20, 0x45, 0xD9, 0x72, 0x13, 0x06, 0x50, 0x1E, 0x20,
        0x42, 0x5A, 0x2E, 0x31, 0x69, 0x93, 0x00, 0xD4, 0xB6, 0x05, 0xD8, 0x51, 0x34, 0xE8, 0x8E, 0xA1,
        0x02, 0xDB, 0xE6, 0x06, 0x18, 0x57, 0xC2, 0x13, 0xE5, 0xF7, 0xFD, 0x59, 0xCE, 0x7F, 0x7C, 0x89,
        0x83, 0x92, 0x19, 0x20, 0xB3, 0x77, 0xAF, 0x5C, 0xB6, 0xB2, 0x53, 0xF0, 0x32, 0xD5, 0x79, 0x7C,
        0xEA, 0x46, 0x9A, 0x8C, 0xC8, 0xEB, 0xF3, 0x5D, 0x9D, 0x24, 0x15, 0xB9, 0x68, 0x42, 0xBE, 0x1F,
        0x9A, 0xC2, 0x90, 0x53, 0x7E, 0x7A, 0x1D, 0x68, 0x7A, 0x47, 0xC6, 0x28, 0x16, 0x9F, 0xF0, 0xA1,
        0x74, 0x76, 0xF4, 0x7A, 0x53, 0x90, 0x07, 0xB0, 0xA2, 0xE6, 0xE3, 0xE6, 0x63, 0xB4, 0xD4, 0x89,
        0x13, 0x1F, 0xE2, 0xD6, 0x01, 0x13, 0x8D, 0x54, 0xA1, 0x83, 0xAE, 0xD7, 0x00, 0x4F, 0x70, 0xDF,
        0x0C, 0x2C, 0xEB, 0xB3, 0x91, 0x7F, 0x7C, 0xF7, 0x9C, 0x8C, 0xD1, 0x8E, 0x4D, 0x77, 0xAB, 0x20,
        0xF1, 0xE5, 0x16, 0x99, 0x7A, 0x84, 0x8A, 0xE2, 0x26, 0xD1, 0x35, 0x32, 0xCF, 0x7C, 0xA6, 0xA5,
        0x1C, 0xF3, 0x8C, 0x1B, 0xA6, 0xD6, 0xBC, 0x7A, 0x8A, 0xFA, 0x08, 0x72, 0xE2, 0x2F, 0x60, 0xE9,
        0xC4, 0xCE, 0x0A, 0x56, 0x72, 0xC6, 0x98, 0x77, 0x31, 0xF9, 0xAC, 0xD0, 0x38, 0xA6, 0xB0, 0x7E,
        0xEA, 0xB9, 0x8B, 0x84, 0x8B, 0x1D, 0x9F, 0xF7, 0x23, 0x5D, 0x22, 0xBE, 0xA8, 0xED, 0xF5, 0x62,
        0x77, 0x30, 0x62, 0x8D, 0x66, 0xFC, 0x7A, 0x3C, 0x45, 0x04, 0xDB, 0x2E
    ])
}

const SENSITIVITIES = new Float32Array([
    0.9, // "terminator"
    0.6, // "crimson"
]);


HoteWordDetect = (function() {
    let porcupineManager;
    let afterHotword = _ => {};
    let currentTimeSeconds = function() {
        return new Date().getTime() / 1000;
    };

    audioManagerErrorCallback = function(ex) {
        alert(ex.toString());
    };

    processCallback = function(keyword) {

        /*if (this.is_paused && (currentTimeSeconds() - this.pauseStartSeconds) > 5) {
                this.is_paused = false;
        }*/
        if (keyword === "crimson") { //&& !this.is_paused) {
            //this.is_paused = true;
            //this.pauseStartSeconds = currentTimeSeconds();
            pause_detect();
            afterHotword();
            ////// ON WAKE WORD DETECT //////
        }
    };

    resume_detect = function() {
        porcupineManager.resume();
    }

    stop_detect = function() {
        porcupineManager.stop();
    }

    pause_detect = function() {
        porcupineManager.pause();
    }

    start_detect = function(onDetectCallback) {
        afterHotword = onDetectCallback;
        porcupineManager = PorcupineManager(
            "hwdetect/porcupine_worker.js",
            "hwdetect/downsampling_worker.js"
        );
        porcupineManager.start(KEYWORDS_ID, SENSITIVITIES, processCallback, audioManagerErrorCallback);
    }

    return {
        start_detect: start_detect,
        pause_detect: pause_detect,
        stop_detect: stop_detect,
        resume_detect: resume_detect
    }
});