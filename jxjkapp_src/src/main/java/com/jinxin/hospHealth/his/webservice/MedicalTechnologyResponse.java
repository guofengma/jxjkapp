/**
 * MedicalTechnologyResponse.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.jinxin.hospHealth.his.webservice;

public class MedicalTechnologyResponse  implements java.io.Serializable {
    private MedicalTechnologyResponseMedicalTechnologyResult medicalTechnologyResult;

    public MedicalTechnologyResponse() {
    }

    public MedicalTechnologyResponse(
           MedicalTechnologyResponseMedicalTechnologyResult medicalTechnologyResult) {
           this.medicalTechnologyResult = medicalTechnologyResult;
    }


    /**
     * Gets the medicalTechnologyResult value for this MedicalTechnologyResponse.
     * 
     * @return medicalTechnologyResult
     */
    public MedicalTechnologyResponseMedicalTechnologyResult getMedicalTechnologyResult() {
        return medicalTechnologyResult;
    }


    /**
     * Sets the medicalTechnologyResult value for this MedicalTechnologyResponse.
     * 
     * @param medicalTechnologyResult
     */
    public void setMedicalTechnologyResult(MedicalTechnologyResponseMedicalTechnologyResult medicalTechnologyResult) {
        this.medicalTechnologyResult = medicalTechnologyResult;
    }

    private Object __equalsCalc = null;
    public synchronized boolean equals(Object obj) {
        if (!(obj instanceof MedicalTechnologyResponse)) return false;
        MedicalTechnologyResponse other = (MedicalTechnologyResponse) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true &&
            ((this.medicalTechnologyResult==null && other.getMedicalTechnologyResult()==null) ||
             (this.medicalTechnologyResult!=null &&
              this.medicalTechnologyResult.equals(other.getMedicalTechnologyResult())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = 1;
        if (getMedicalTechnologyResult() != null) {
            _hashCode += getMedicalTechnologyResult().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(MedicalTechnologyResponse.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://tempuri.org/", ">MedicalTechnologyResponse"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("medicalTechnologyResult");
        elemField.setXmlName(new javax.xml.namespace.QName("http://tempuri.org/", "MedicalTechnologyResult"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://tempuri.org/", ">>MedicalTechnologyResponse>MedicalTechnologyResult"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
    }

    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

    /**
     * Get Custom Serializer
     */
    public static org.apache.axis.encoding.Serializer getSerializer(
           String mechType,
           Class _javaType,
           javax.xml.namespace.QName _xmlType) {
        return
          new  org.apache.axis.encoding.ser.BeanSerializer(
            _javaType, _xmlType, typeDesc);
    }

    /**
     * Get Custom Deserializer
     */
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           String mechType,
           Class _javaType,
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanDeserializer(
            _javaType, _xmlType, typeDesc);
    }

}
