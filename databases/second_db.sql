PGDMP     .                     |         	   second_db    11.2    15.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            	           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    58289 	   second_db    DATABASE     �   CREATE DATABASE second_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE second_db;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                User    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   User    false    6                       0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   User    false    6            �            1259    58292 	   dashboard    TABLE     �   CREATE TABLE public.dashboard (
    id integer NOT NULL,
    icon character varying,
    title character varying,
    value integer,
    unit character varying,
    color character varying,
    caption character varying
);
    DROP TABLE public.dashboard;
       public            postgres    false    6            �            1259    58290    dashboard_id_seq    SEQUENCE     �   ALTER TABLE public.dashboard ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.dashboard_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    197    6            �            1259    58302    people    TABLE     �   CREATE TABLE public.people (
    id integer NOT NULL,
    name character varying NOT NULL,
    title character varying,
    role character varying,
    email character varying
);
    DROP TABLE public.people;
       public            postgres    false    6            �            1259    58300    people_id_seq    SEQUENCE     �   ALTER TABLE public.people ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.people_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    6    199                      0    58292 	   dashboard 
   TABLE DATA           Q   COPY public.dashboard (id, icon, title, value, unit, color, caption) FROM stdin;
    public          postgres    false    197   �                 0    58302    people 
   TABLE DATA           >   COPY public.people (id, name, title, role, email) FROM stdin;
    public          postgres    false    199   �                  0    0    dashboard_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.dashboard_id_seq', 8, true);
          public          postgres    false    196                       0    0    people_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.people_id_seq', 21, true);
          public          postgres    false    198            �
           2606    58299    dashboard dashboard_pk 
   CONSTRAINT     T   ALTER TABLE ONLY public.dashboard
    ADD CONSTRAINT dashboard_pk PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.dashboard DROP CONSTRAINT dashboard_pk;
       public            postgres    false    197            �
           2606    58309    people people_pk 
   CONSTRAINT     N   ALTER TABLE ONLY public.people
    ADD CONSTRAINT people_pk PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.people DROP CONSTRAINT people_pk;
       public            postgres    false    199                 x�M�QJ�@��3��ve���o.�"�����/�6tڙ�L-=���H^��("�C���O]m�#��3�mN���A϶3<�K��U��k?���*�"p�ΊX�VzǇ?��{�����(����)�jx���$D.�8v�5pg;f�L���_R��=���.u��7z��d���$fu�V�76�����!����0Mp�x�'#�<2I���$���UӲrs�`Z�!����>?`6����oδ�g�x���C>m�         U  x�}��n�0E�����Ov�x�PQi˦7�٦����U��ؒ��;�=�I�;Q�P��,�&��@E%Z��~��d�;�w��T�d�Yځ>m�7X�1[� �|7Au�ki k�IQW���H�>��b��rZ�|��cwO:�ik��*���
�I�(�����z�d���fHF؜O�p��K42p��aW�*R�&Rm�K)�r>�
,�}J��<�/�k*�5�6��ax���^g�١��}X�D�a��^��J�	�yGo��?�[��M?��c-��?ٲ�&T> ��K{0c��X�=�Z��g��F�X�}��5a�}��[     